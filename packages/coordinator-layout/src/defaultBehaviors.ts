import {CoordinatorLayoutBehavior, CoordinatorLayoutElement} from "./CoordinatorLayout/CoordinatorLayout";
import {BottomAppBar} from "@znui/appbars";

export class BottomAppBarBehavior extends CoordinatorLayoutBehavior {

    onScrollStart(dependencies: CoordinatorLayoutElement[], child: CoordinatorLayoutElement): boolean {
        return child.element.props.hideOnScroll || false
    }

    onScroll(
        dependencies: CoordinatorLayoutElement[],
        child: CoordinatorLayoutElement,
        dx: number,
        dy: number,
        current: [number, number]
    ) {
        if(dy>0) {
            child.elementInstance!!.style.bottom = (-child.elementInstance!!.getBoundingClientRect().height) + 'px'
        }else{
            child.elementInstance!!.style.bottom = '0px'
        }
    }

    onLayout(parent: HTMLElement, child: CoordinatorLayoutElement) {
        const parentRect = parent.getBoundingClientRect()

        child.elementInstance!!.style.position = 'absolute'
        child.elementInstance!!.style.zIndex = '1'
        child.elementInstance!!.style.width = parentRect.width + 'px'
        child.elementInstance!!.style.transition = 'bottom 300ms var(--znui-emphasized-motion)'
        child.elementInstance!!.style.bottom = child.elementInstance!!.style.left = child.elementInstance!!.style.right = '0px'
    }
}

BottomAppBar.defaultBehavior = () => new BottomAppBarBehavior()