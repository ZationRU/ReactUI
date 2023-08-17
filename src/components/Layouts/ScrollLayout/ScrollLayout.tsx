import {znui} from "../../Basic/znui";
import {ZnUIComponent} from "../../../styled/styled.types";

export const ScrollLayout: ZnUIComponent<'div', {
    orientation?: 'vertical'|'horizontal'
}> = znui('div', {
    styles: props => ({
        overflowY: props.orientation !== 'horizontal' ? 'scroll': 'clip',
        w: props.orientation !== 'horizontal' ? '100%': undefined,
        overflowX: props.orientation === 'horizontal' ? 'scroll': 'clip'
    })
})