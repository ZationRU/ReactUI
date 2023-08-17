import {znui} from "../../Basic/znui";
import {ZnUIComponent} from "../../../styled/styled.types";

export const ScrollLayout: ZnUIComponent<'div', {
    orientation?: 'vertical'|'horizontal'
}> = znui('div', {
    baseStyle: {
        overflow: 'auto',
        w: '100%'
    },
    styles: props => ({
        overflowY: props.orientation !== 'horizontal' ? 'scroll': 'clip',
        overflowX: props.orientation === 'horizontal' ? 'scroll': 'clip'
    })
})