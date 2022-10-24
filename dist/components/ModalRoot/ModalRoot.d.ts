import React, { EventHandler } from "react";
import "./ModalRoot.css";
export interface ModalRootProps extends React.ImgHTMLAttributes<HTMLElement> {
    dismiss: EventHandler<undefined>;
}
export default function ModalRoot(props: ModalRootProps): JSX.Element;
