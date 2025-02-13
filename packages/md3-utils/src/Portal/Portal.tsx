import React, {Children, ReactElement, RefObject, useEffect, useState} from "react";
import {createPortal} from "react-dom";

export type PortalProps = {
    /**
     * Indicates whether the Portal is disabled.
     * If true, the children will be rendered in the same DOM hierarchy.
     */
    disabled?: boolean
    /**
     * Ref object for the container element in which the children will be rendered.
     * If undefined, default is znui-portal
     */
    container?: RefObject<HTMLElement | null>
    /**
     * The content to be rendered within the portal.
     */
    children: ReactElement
}

const znuiPortal = document.getElementById('znui-portal')!

export const Portal = ({ disabled, container, children }: PortalProps) => {
    const [target, setTarget] = useState(document.body)

    useEffect(() => {
        setTarget(container?.current ?? znuiPortal)
    }, [container])

    if(disabled) return children
    return <>{Children.map(children, it => createPortal(it, target))}</>
}