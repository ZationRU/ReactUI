import React from "react";
import ModalRoot, {ModalRootProps} from "../ModalRoot/ModalRoot";
import {classNames} from "../../utils";
import Card from "../Card/Card";
import "./Dialog.css";

export default function Dialog(props: ModalRootProps) {
    const {
        dismiss,
        className,
        children,
    } = props

    return <ModalRoot dismiss={dismiss} className={classNames("Dialog", className)}>
        <Card>{children}</Card>
    </ModalRoot>
}