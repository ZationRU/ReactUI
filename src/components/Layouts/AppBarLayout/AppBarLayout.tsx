import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import React, {
    ForwardRefExoticComponent,
    PropsWithoutRef,
    RefAttributes
} from "react";
import {CoordinatorLayoutBehavior, CoordinatorLayoutElement} from "../CoordinatorLayout/CoordinatorLayout";
import {ThemeTokens} from "../../../theme";

class AppBarLayoutBehavior extends CoordinatorLayoutBehavior {
    layoutDependsOn(child: React.ReactElement<any, React.ReactElement["type"]>, dependency: React.ReactElement): boolean {
        return false
    }
}

class AppBarLayoutScrollBehavior extends CoordinatorLayoutBehavior<'div'> {
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

    onScroll(
        dependencies: CoordinatorLayoutElement[],
        child: React.ReactElement<any, "div">,
        childInstance: HTMLDivElement
    ) {
        const shouldLift = childInstance.scrollTop > 0
        const appBarLayout = dependencies.find(it => it.element.type===AppBarLayout)

        if(appBarLayout&&appBarLayout.elementInstance) {
            this.updateLiftedState(appBarLayout.elementInstance, shouldLift)
        }
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
            'background 300ms var(--emphasized-motion)s',
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


