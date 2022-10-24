import React, {EventHandler} from "react";
import {classNames} from "../../utils";
import "./ModalRoot.css";

export interface ModalRootProps extends React.ImgHTMLAttributes<HTMLElement> {
    dismiss: EventHandler<undefined>
}

export default function ModalRoot(props: ModalRootProps) {
    const {
        dismiss,
        className,
        children,
    } = props

    return <div className={classNames("ModalRoot", className)} onClick={() => dismiss(undefined)}>
        {children}
    </div>
}