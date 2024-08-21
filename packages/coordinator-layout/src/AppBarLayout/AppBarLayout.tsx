import {Layout, LayoutProps} from "@znui/layouts";
import React, {
    ForwardRefExoticComponent, PropsWithoutRef, ReactElement, RefAttributes
} from "react";
import {CoordinatorLayoutBehavior, CoordinatorLayoutElement} from "../CoordinatorLayout/CoordinatorLayout";
import {ThemeTokens} from "@znui/md3-themes";
import {mergeRefs} from "@znui/utils";

export type ScrollFlag = 'scroll'|'enterAlways'

export class AppBarLayoutBehavior extends CoordinatorLayoutBehavior {
    private defaultBackground: string = ThemeTokens.surface

    updateLiftedState(appBarLayout: HTMLElement, lift: boolean) {
        if (!this.defaultBackground && lift) {
            this.defaultBackground = window.getComputedStyle(appBarLayout).background
        }

        appBarLayout.style.background = lift ? ThemeTokens.surfaceContainer : this.defaultBackground!!
    }

    onScrollStart(dependencies: CoordinatorLayoutElement[], child: CoordinatorLayoutElement): boolean {
        return true
    }

    onScroll(
        dependencies: CoordinatorLayoutElement[],
        child: CoordinatorLayoutElement,
        dx: number,
        dy: number,
        [, y]: [number, number]
    ) {
        const shouldLift = y > 0
        if (child.elementInstance) {
            this.updateLiftedState(child.elementInstance, shouldLift)

            const scrollElements = (child.elementInstance as AppBarLayoutRefProps).getScrollElements()
            for (const scrollElement of scrollElements) {
                const height = scrollElement.ref.getBoundingClientRect().height

                if(scrollElement.scrollFlags.includes('scroll')) {
                    scrollElement.ref.style.transition += ', margin-top 200ms '+ThemeTokens.motion.emphasized
                    scrollElement.ref.style.marginTop = '-'+(y<height? y: height)+'px'


                    if(scrollElement.scrollFlags.includes('enterAlways')&&y!==0&&dy<0) {
                        scrollElement.ref.style.marginTop = '0px'
                        scrollElement.ref.style.transition += 'margin-top 200ms '+ThemeTokens.motion.emphasized
                    }
                }
            }
        }
    }
}

export class AppBarLayoutScrollBehavior extends CoordinatorLayoutBehavior<'div'> {
    layoutDependsOn(child: React.ReactElement<any, 'div'>, dependency: React.ReactElement): boolean {
        return dependency.type === AppBarLayout;
    }

    onDependentViewChanged(parent: HTMLElement, child: CoordinatorLayoutElement, dependency: CoordinatorLayoutElement) {
        const dependencyRect = dependency.elementInstance!!.getBoundingClientRect()
        child.elementInstance!!.style.paddingTop = dependencyRect.height + "px"
    }

    onScroll(
        dependencies: CoordinatorLayoutElement[],
        child: CoordinatorLayoutElement,
        dx: number,
        dy: number,
        current: [number, number]
    ) {
        if(dependencies.length===0) {
            return
        }

        const dependencyRect = dependencies[0].elementInstance!!.getBoundingClientRect()
        child.elementInstance!!.style.paddingTop = dependencyRect.height + "px"

        const lastElementChild = child.elementInstance!!.lastElementChild
        if(lastElementChild instanceof HTMLElement) {
            lastElementChild.style.paddingBottom = dependencyRect.height + "px"
        }
    }

    onScrollStart(dependencies: CoordinatorLayoutElement[], child: CoordinatorLayoutElement): boolean {
        return true
    }
}


export interface AppBarLayoutProps extends LayoutProps {
}

type ScrollElement = {
    ref: HTMLElement,
    scrollFlags: ScrollFlag[]
}

export interface AppBarLayoutRefProps extends HTMLDivElement {
    getScrollElements: () => ScrollElement[]
}

export const AppBarLayout = React.forwardRef<AppBarLayoutRefProps>((
    props: AppBarLayoutProps,
    ref
) => {
    const {
        bg,
        transition,
        children: rawChildren,
        ...layoutRest
    } = props

    let scrollElements: ScrollElement[] = []

    let children = Array.isArray(rawChildren) ? Array.from(rawChildren): [rawChildren]
    for (const childIndex in children) {
        const child = children[childIndex]

        if(child.props) {
            const element = child as ReactElement
            if(element.props.scrollFlags&&element.props.scrollFlags.includes('scroll')){
                children[childIndex] = React.cloneElement(element, {
                    ref: mergeRefs((childRef) => {
                        if(childRef!=null) {
                            scrollElements.push({
                                ref: childRef,
                                scrollFlags: element.props.scrollFlags
                            })
                        }
                    }, element.props.ref)
                })
            }
        }
    }

    return <Layout
        {...layoutRest}
        bg={ThemeTokens.surface}
        transition={[
            'background 300ms var(--znui-emphasized-motion)',
            transition
        ].join(',')}
        zIndex={2}
        top={0}
        posH={0}
        ref={mergeRefs((rawRef) => {
            if(rawRef){
                rawRef.getScrollElements = () => scrollElements
            }
        }, ref)}
    >
        {children}
    </Layout>
}) as ForwardRefExoticComponent<PropsWithoutRef<AppBarLayoutProps> & RefAttributes<AppBarLayoutRefProps>> & {
    Behavior: () => AppBarLayoutBehavior
    ScrollBehavior: () => AppBarLayoutScrollBehavior
}

AppBarLayout.displayName = "AppBarLayout"

AppBarLayout.Behavior = () => new AppBarLayoutBehavior()
AppBarLayout.ScrollBehavior = () => new AppBarLayoutScrollBehavior()
AppBarLayout.defaultBehavior = AppBarLayout.Behavior

declare module 'react' {
    interface HTMLAttributes<T> {
        scrollFlags?: ScrollFlag[]
    }
}
