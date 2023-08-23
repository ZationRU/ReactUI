import React, {
    ReactElement,
    ReactFragment,
    useMemo,
    useRef,
    useState
} from "react";
import {Layout, LayoutProps} from "../../Basic";
import {getArrayByReactNode, mergeRefs} from "../../../utils";
import Measure, {ContentRect} from "react-measure";

export interface CoordinatorLayoutProps extends LayoutProps {

}

/**
 * Not yet finished component
 * @param props
 * @constructor
 */
export const CoordinatorLayout = React.forwardRef((props: CoordinatorLayoutProps, innerRef: React.ForwardedRef<HTMLDivElement>) => {
    const [measuredRect, setMeasuredRect] = useState<ContentRect | null>(null)
    const parentRef = useRef<HTMLDivElement | null>(null)
    const {
        children,
        ...otherProps
    } = props

    const clones = useMemo(() => {
        let scrollStarted = false
        let endScrollTimeoutPid: NodeJS.Timeout | null = null

        if (measuredRect == null || parentRef.current == null) return []
        const childrenFragment = Array.from(getArrayByReactNode(children))
        const nodes = childrenFragment
            .filter(it => typeof it === 'object' && Object.hasOwn(it as object, 'type')) as ReactElement[]

        const behaviorsInstances: CoordinatorLayoutBehavior[] = []

        nodes.forEach((child, index) => {
            const behaviorConstructor = 'behavior' in child.props ? child.props.behavior :
                ((typeof child.type !== 'string' && 'defaultBehavior' in child.type) ? child.type.defaultBehavior : undefined)

            if (!behaviorConstructor) return

            const behavior = behaviorConstructor() as CoordinatorLayoutBehavior & {
                _dependencies: CoordinatorLayoutElement[]
            }

            behaviorsInstances.push(behavior)

            const behaviorDependencies = childrenFragment
                .filter(it => typeof it === 'object' && Object.hasOwn(it as object, 'type'))
                .filter(dependency => behavior.layoutDependsOn(child, dependency as ReactElement))
                .map(it => ({
                    index: childrenFragment.indexOf(it),
                    dependency: it as ReactElement
                }))

            const behaviorDependenciesElements: CoordinatorLayoutElement[] = []

            const childElement: CoordinatorLayoutElement = Object.hasOwn(child.props, "_coordinatorElement") ?
                child.props._coordinatorElement : {
                    element: child,
                    elementInstance: null,
                    measuredRect: measuredRect
                }

            const childDependencyChangedWaiters: CoordinatorLayoutElement[] = []
            for (const {index, dependency} of behaviorDependencies) {
                const element: CoordinatorLayoutElement = Object.hasOwn(dependency.props, "_coordinatorElement") ?
                    dependency.props._coordinatorElement : {
                        element: dependency,
                        elementInstance: null,
                        measuredRect: measuredRect
                    }

                const clonedDependency = React.cloneElement(
                    dependency,
                    {
                        _coordinatorElement: element,
                        ref: mergeRefs((ref) => {
                            if (ref != null) {
                                element.elementInstance = ref

                                if (childElement.elementInstance == null) {
                                    childDependencyChangedWaiters.push(element)
                                } else {
                                    behavior.onDependentViewChanged(parentRef.current!!, childElement, element)
                                }
                            }
                        }, dependency.props.ref)
                    }
                )

                element.element = clonedDependency
                childrenFragment[index] = clonedDependency

                behaviorDependenciesElements.push(element)
            }

            behavior._dependencies = behaviorDependenciesElements

            const childCloned = React.cloneElement(child, {
                key: index,
                _coordinatorElement: childElement,
                ref: mergeRefs((ref) => {
                    if (ref != null) {
                        childElement.elementInstance = ref

                        childDependencyChangedWaiters.forEach(it =>
                            behavior.onDependentViewChanged(parentRef.current!!, childElement, it)
                        )

                        behavior.onLayout(parentRef.current!!, childElement)
                    }
                }, child.props.ref),
            })

            behavior._child = childElement
            childrenFragment[childrenFragment.indexOf(child)] = childCloned
        })

        childrenFragment.filter(it => typeof it === 'object' && Object.hasOwn(it as object, 'type'))
            .forEach((child, i) => {
                const element = child as ReactElement

                let prevY = 0
                let prevX = 0

                childrenFragment[i] = React.cloneElement(element, {
                    onScroll: (event: React.UIEvent<any>) => {
                        element.props.onScroll?.call(undefined, event)

                        const started = scrollStarted
                        if (started) {
                            scrollStarted = true
                        }

                        behaviorsInstances.forEach(behavior => {
                            if (!started) {
                                behavior._acceptScroll = behavior.onScrollStart(
                                    behavior._dependencies,
                                    behavior._child!!
                                )
                            }

                            if (behavior._acceptScroll) {
                                behavior.onScroll(
                                    behavior._dependencies,
                                    behavior._child!!,
                                    event.currentTarget.scrollLeft - prevX,
                                    event.currentTarget.scrollTop - prevY,
                                )
                            }
                        })

                        prevX = event.currentTarget.scrollLeft
                        prevY = event.currentTarget.scrollTop

                        endScrollTimeoutPid && clearTimeout(endScrollTimeoutPid)

                        endScrollTimeoutPid = setTimeout(() => {
                            behaviorsInstances.forEach(it => {
                                if (it._acceptScroll) {
                                    it.onScrollEnd(
                                        it._dependencies,
                                        it._child!!
                                    )
                                }

                                scrollStarted = false
                            })
                        }, 1000)
                    }
                })
            })

        return childrenFragment as ReactFragment
    }, [children, measuredRect])

    return <Measure
        bounds={true}
        innerRef={mergeRefs(parentRef, innerRef)}
        onResize={setMeasuredRect}
    >
        {({measureRef}) =>
            <Layout
                {...otherProps}
                pos="relative"
                ref={measureRef}
            >{clones}</Layout>
        }
    </Measure>
})

export type CoordinatorLayoutElement = {
    element: ReactElement,
    elementInstance: HTMLElement | null,
    measuredRect: ContentRect
}

export abstract class CoordinatorLayoutBehavior<T extends ReactElement['type'] = ReactElement['type']> {
    _acceptScroll: boolean = false;
    _dependencies: CoordinatorLayoutElement[] = [];
    _child: CoordinatorLayoutElement | null = null

    layoutDependsOn(child: ReactElement<any, T>, dependency: ReactElement): boolean {
        return false
    }

    onScrollStart(
        dependencies: CoordinatorLayoutElement[],
        child: CoordinatorLayoutElement
    ): boolean {
        return false
    }

    onScrollEnd(
        dependencies: CoordinatorLayoutElement[],
        child: CoordinatorLayoutElement
    ): void {
    }

    onScroll(
        dependencies: CoordinatorLayoutElement[],
        child: CoordinatorLayoutElement,
        dx: number,
        dy: number
    ): void {
    }

    onLayout(
        parent: HTMLElement,
        child: CoordinatorLayoutElement
    ): void {}

    onDependentViewChanged(
        parent: HTMLElement,
        child: CoordinatorLayoutElement,
        dependency: CoordinatorLayoutElement): void {
    }
}

declare module 'react' {
    interface HTMLAttributes<T> {
        behavior?: (() => CoordinatorLayoutBehavior) | undefined
    }
}