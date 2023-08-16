import React, {ClassAttributes, HTMLAttributes, ReactElement, ReactFragment, useEffect, useMemo} from "react";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {getArrayByReactNode, mergeRefs} from "../../../utils";
import {object} from "prop-types";

export interface CoordinatorLayoutProps extends LayoutProps {

}

/**
 * Not yet finished component
 * @param props
 * @constructor
 */
export function CoordinatorLayout(props: CoordinatorLayoutProps) {
    const {
        children,
        ...otherProps
    } = props

    const clones = useMemo(() => {
        const childrenFragment = Array.from(getArrayByReactNode(children))
        const nodes = childrenFragment
            .filter(it => typeof it === 'object' &&Object.hasOwn(it as object, 'type')) as ReactElement[]

        nodes.forEach((child, index) => {
            const behaviorConstructor = 'behavior' in child.props ? child.props.behavior :
                ((typeof child.type !== 'string' && 'defaultBehavior' in child.type) ? child.type.defaultBehavior: undefined)

            if(!behaviorConstructor) return

            const behavior = behaviorConstructor() as CoordinatorLayoutBehavior
            const behaviorDependencies = childrenFragment
                .filter(it => typeof it === 'object' &&Object.hasOwn(it as object, 'type'))
                .filter(dependency => behavior.layoutDependsOn(child, dependency as ReactElement))
                .map(it => ({
                    index: childrenFragment.indexOf(it),
                    dependency: it as ReactElement
                }))

            const behaviorDependenciesElements: CoordinatorLayoutElement[] = []

            for(const {index, dependency} of behaviorDependencies) {
                const element: CoordinatorLayoutElement = {
                    element: dependency,
                    elementInstance: null
                }

                const clonedDependency = React.cloneElement(
                    dependency,
                    {
                        ref: mergeRefs((ref) => {
                            element.elementInstance = ref
                        }, dependency.props.ref)
                    }
                )

                element.element = clonedDependency

                childrenFragment[index] = clonedDependency
                behaviorDependenciesElements.push(element)
            }

            console.log(behavior, behaviorDependencies)

            childrenFragment[childrenFragment.indexOf(child)] = React.cloneElement(child, {
                key: index,
                onScroll: (event: React.UIEvent<any>) => behavior.onScroll(
                    behaviorDependenciesElements,
                    child,
                    event.currentTarget
                )
            })
        })

        console.log(childrenFragment)


        return childrenFragment
    }, [children]) as ReactFragment

    return <Layout
        {...otherProps}
    >{clones}</Layout>
}

export type CoordinatorLayoutElement = {
    element: ReactElement,
    elementInstance: HTMLElement|null
}

export abstract class CoordinatorLayoutBehavior<T extends ReactElement['type'] = ReactElement['type']> {
    layoutDependsOn(child: ReactElement<any, T>, dependency: ReactElement): boolean { return false }
    onScroll(
        dependencies: CoordinatorLayoutElement[],
        child: ReactElement<any, T>,
        childInstance: HTMLElement,
    ): void {}
}

declare module 'react' {
    interface HTMLAttributes<T> {
        behavior?: (() => CoordinatorLayoutBehavior)|undefined
    }
}