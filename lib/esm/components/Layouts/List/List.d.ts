/// <reference types="react" />
import { LayoutProps } from "../Layout/Layout";
import { Adaptive } from "../../../adaptive/Adaptive";
export interface ListProps extends LayoutProps {
    orientation?: Adaptive<'vertical' | 'horizontal'>;
}
export declare function List(props: ListProps): JSX.Element;
