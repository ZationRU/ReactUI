import {Layout, LayoutProps} from "../../Basic";
import React, {
    ForwardRefExoticComponent,
    PropsWithoutRef,
    RefAttributes
} from "react";
import {CoordinatorLayoutBehavior, CoordinatorLayoutElement} from "../CoordinatorLayout/CoordinatorLayout";
import {ThemeTokens} from "../../../theme";

export class AppBarLayoutBehavior extends CoordinatorLayoutBehavior {
    private defaultBackground: string | null = null

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
        console.log(shouldLift)
        if (child.elementInstance) {
            this.updateLiftedState(child.elementInstance, shouldLift)
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

    onScrollStart(dependencies: CoordinatorLayoutElement[], child: CoordinatorLayoutElement): boolean {
        return true
    }
}


export interface AppBarLayoutProps extends LayoutProps {
}

export interface AppBarLayoutRefProps extends HTMLDivElement {
}

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
        zIndex={1}
        w='100%'
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


