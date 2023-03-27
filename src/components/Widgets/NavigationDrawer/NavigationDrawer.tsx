import {SurfaceLayout} from "../../Layouts/SurfaceLayout/SurfaceLayout";
import {LayoutProps} from "../../Layouts/Layout/Layout";

interface NavigationDrawerProps extends LayoutProps {

}

export function NavigationDrawer(props: NavigationDrawerProps) {
    return <SurfaceLayout {...props} s={1} p={12}/>
}