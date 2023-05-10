import {Layout, LayoutProps} from "../Layout/Layout";
import "./CoordinatorLayout.css";

export interface CoordinatorLayoutProps extends LayoutProps {

}


export function CoordinatorLayout(props: CoordinatorLayoutProps) {
    const {

        ...otherProps
    } = props

    return <Layout className="CoordinatorLayout" {...otherProps} onScroll={(e) => {

    }}/>
}