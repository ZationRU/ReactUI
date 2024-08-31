import {LayoutProps} from "@znui/layouts";
import {znui, ZnUIComponent} from "@znui/base";

export type ScrollLayoutProps = LayoutProps

export const ScrollLayout: ZnUIComponent<'div', {
    orientation?: 'vertical'|'horizontal'
}> = znui('div', {
    styles: props => ({
        overflowY: props.orientation !== 'horizontal' ? 'scroll': 'clip',
        w: props.orientation !== 'horizontal' ? '100%': undefined,
        overflowX: props.orientation === 'horizontal' ? 'scroll': 'clip'
    })
})

ScrollLayout.displayName = 'ScrollLayout'