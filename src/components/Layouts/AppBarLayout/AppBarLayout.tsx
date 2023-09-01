import {Layout, LayoutProps} from "../../Basic";
import React, {
    ForwardRefExoticComponent,
    PropsWithoutRef,
    RefAttributes
} from "react";
import {CoordinatorLayoutBehavior, CoordinatorLayoutElement} from "../CoordinatorLayout/CoordinatorLayout";
import {ThemeTokens} from "../../../theme";

 export class AppBarLayoutBehavior extends CoordinatorLayoutBehavior {
    layoutDependsOn(child: React.ReactElement<any, React.ReactElement["type"]>, dependency: React.ReactElement): boolean {
        return false
    }
}

export class AppBarLayoutScrollBehavior extends CoordinatorLayoutBehavior<'div'> {
    private defaultBackground: string|null = null

    layoutDependsOn(child: React.ReactElement<any, 'div'>, dependency: React.ReactElement): boolean {
        return dependency.type===AppBarLayout;
    }

    updateLiftedState(appBarLayout: HTMLElement, lift: boolean) {
        if(!this.defaultBackground&&lift) {
            this.defaultBackground = window.getComputedStyle(appBarLayout).background
        }

        appBarLayout.style.background = lift ? ThemeTokens.surfaceContainer: this.defaultBackground!!
    }

    onDependentViewChanged(parent: HTMLElement, child: CoordinatorLayoutElement, dependency: CoordinatorLayoutElement) {
        const currentHeight = parent.clientHeight
        const dependencyRect = dependency.elementInstance!!.getBoundingClientRect()

        child.elementInstance!!.style.height = (currentHeight - dependencyRect.height) + "px"
    }

    onScroll(
        dependencies: CoordinatorLayoutElement[],
        child: CoordinatorLayoutElement,
        dx: number,
        dy: number
    ) {
        const shouldLift = child.elementInstance!!.scrollTop > 0
        const appBarLayout = dependencies.find(it => it.element.type===AppBarLayout)

        if(appBarLayout&&appBarLayout.elementInstance) {
            this.updateLiftedState(appBarLayout.elementInstance, shouldLift)
        }
    }

    onScrollStart(dependencies: CoordinatorLayoutElement[], child: CoordinatorLayoutElement): boolean {
        return true
    }
}


export interface AppBarLayoutProps extends LayoutProps {}
export interface AppBarLayoutRefProps extends HTMLDivElement {}

export const AppBarLayout = React.forwardRef<AppBarLayoutRefProps>((props: AppBarLayoutProps, ref) => {
    const {
        bg,
        transition,
        ...layoutRest
    } = props

    return <Layout
        {...layoutRest}
        transition={[
            'background 300ms var(--znui-emphasized-motion)',
            transition
        ].join(',')}
        ref={ref}
    />
}) as ForwardRefExoticComponent<PropsWithoutRef<AppBarLayoutProps> & RefAttributes<AppBarLayoutRefProps>> & {
    defaultBehavior: () => AppBarLayoutBehavior
    Behavior: () => AppBarLayoutBehavior
    ScrollBehavior: () => AppBarLayoutScrollBehavior
}

AppBarLayout.Behavior = () => new AppBarLayoutBehavior()
AppBarLayout.ScrollBehavior = () => new AppBarLayoutScrollBehavior()
AppBarLayout.defaultBehavior = AppBarLayout.Behavior


