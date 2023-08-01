import React, {createContext, DOMAttributes, ReactNode, useMemo, useRef} from "react";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import "./CoordinatorLayout.css";

export interface CoordinatorLayoutProps extends LayoutProps {

}

export type CoordinatorLayoutEvents = Exclude<DOMAttributes<HTMLDivElement>, {
    children: any,
    dangerouslySetInnerHTML: any
}>

export abstract class CoordinatorLayoutAnchorController {
    abstract show(anchorId: string|null, element: ReactNode): void
    abstract registerAnchor(anchorId: string|null, element: HTMLDivElement): void
}

class CoordinatorLayoutAnchorControllerImpl extends CoordinatorLayoutAnchorController {
    private ref: React.MutableRefObject<HTMLDivElement | null>;

    constructor(ref: React.MutableRefObject<HTMLDivElement | null>) {
        super();
        this.ref = ref;
    }

    show(anchorId: string | null, element: React.ReactNode): void {

    }

    registerAnchor(anchorId: string | null, element: HTMLDivElement): void {
        
    }
}

/**
 * Not yet finished component
 * @param props
 * @constructor
 */
export function CoordinatorLayout(props: CoordinatorLayoutProps) {
    const {
        children,
        ...otherProps
    } = props

    const ref = useRef<HTMLDivElement|null>(null)

    const anchorController = useMemo(() => new CoordinatorLayoutAnchorControllerImpl(ref), [ref])

    let prevScroll = 0

    return <Layout className="CoordinatorLayout" {...otherProps} onScroll={(e) => {
        const currentScroll = e.currentTarget.scrollTop

        const dY = currentScroll - prevScroll

        prevScroll = currentScroll

        console.log(currentScroll)
    }}>

    </Layout>
}