import React, {
    ReactElement,
    ReactFragment,
    useMemo,
    useRef,
    useState
} from "react";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
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
    const [measuredRect, setMeasuredRect] = useState<ContentRect|null>(null)
    const parentRef = useRef<HTMLDivElement|null>(null)
    const {
        children,
        ...otherProps
    } = props

    console.log(measuredRect)

    const clones = useMemo(() => {
        if(measuredRect==null||parentRef.current==null) return []
        const childrenFragment = Array.from(getArrayByReactNode(children))
        const nodes = childrenFragment
            .filter(it => typeof it === 'object' &&Object.hasOwn(it as object, 'type')) as ReactElement[]

        nodes.forEach((child, index) => {

            console.log(child)
            const behaviorConstructor = 'behavior' in child.props ? child.props.behavior :
                ((typeof child.type !== 'string' && 'defaultBehavior' in child.type) ? child.type.defaultBehavior: undefined)

            if(!behaviorConstructor) return

            const behavior = behaviorConstructor() as CoordinatorLayoutBehavior & {
              _dependencies: CoordinatorLayoutElement[]
            }

            const behaviorDependencies = childrenFragment
                .filter(it => typeof it === 'object' &&Object.hasOwn(it as object, 'type'))
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
            for(const {index, dependency} of behaviorDependencies) {
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
                            if(ref!=null) {
                                element.elementInstance = ref

                                if(childElement.elementInstance==null) {
                                    childDependencyChangedWaiters.push(element)
                                }else{
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

            childrenFragment[childrenFragment.indexOf(child)] = React.cloneElement(child, {
                key: index,
                _coordinatorElement: childElement,
                ref: mergeRefs((ref) => {
                    if(ref!=null) {
                        childElement.elementInstance = ref

                        childDependencyChangedWaiters.forEach(it =>
                            behavior.onDependentViewChanged(parentRef.current!!, childElement, it)
                        )
                    }
                }, child.props.ref),
                onScroll: (event: React.UIEvent<any>) => behavior.onScroll(
                    behaviorDependenciesElements,
                    child,
                    event.currentTarget
                )
            })
        })

        console.log(childrenFragment)


        return childrenFragment
    }, [children, measuredRect]) as ReactFragment

    return <Measure
        bounds={true}
        innerRef={mergeRefs(parentRef, innerRef)}
        onResize={setMeasuredRect}
    >
        {({measureRef}) =>
            <Layout
                {...otherProps}
                ref={measureRef}
            >{clones}</Layout>
        }
    </Measure>
})

export type CoordinatorLayoutElement = {
    element: ReactElement,
    elementInstance: HTMLElement|null,
    measuredRect: ContentRect
}

export abstract class CoordinatorLayoutBehavior<T extends ReactElement['type'] = ReactElement['type']> {
    layoutDependsOn(child: ReactElement<any, T>, dependency: ReactElement): boolean { return false }
    onScroll(
        dependencies: CoordinatorLayoutElement[],
        child: ReactElement<any, T>,
        childInstance: HTMLElement,
    ): void {}

    onDependentViewChanged(parent: HTMLElement, child: CoordinatorLayoutElement, dependency: CoordinatorLayoutElement): void {}
}

declare module 'react' {
    interface HTMLAttributes<T> {
        behavior?: (() => CoordinatorLayoutBehavior)|undefined
    }
}