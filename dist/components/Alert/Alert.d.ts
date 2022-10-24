import React from "react";
import "./Alert.css";
export interface AlertProps extends React.ImgHTMLAttributes<HTMLElement> {
    type: "negative";
    title?: string;
}
export default function Alert(params: AlertProps): JSX.Element;
