import Layout, {LayoutProps} from "../Layout/Layout";
import classNames from "classNames";
import StateLayer from "../StateLayer/StateLayer";
import "./SurfaceLayout.css";

export interface SurfaceLayoutProps extends LayoutProps {
    /**
     * Surface type
     *
     * The larger the number, the greater the shade from primary
     *
     * @default 0
     */
    s ?: 0 | 1 | 2 | 3 | 4 | 5


    /**
     * Text color
     * @default var(--znui-on-surface)
     */
    color?: string

}

export default function SurfaceLayout(props: SurfaceLayoutProps) {
    const {
        s = 0,
        className,
        children,
        color = 'var(--znui-on-surface)',
        ...otherProps
    } = props

    return <Layout {...otherProps} color={color} className={classNames(
        className,
        "SurfaceLayout",
        "SurfaceLayout-"+s
    )}>
        <StateLayer/>
        {children}
    </Layout>
}