/// <reference types="react" />
import { LayoutProps } from "../Layout/Layout";
export interface ListProps extends LayoutProps {
}
export declare abstract class ListAdapter<T> {
    count: number;
    getItemType(index: number): number;
}
export default function List(props: ListProps): JSX.Element;
