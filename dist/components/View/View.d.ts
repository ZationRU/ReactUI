import React from "react";
export interface ViewProps extends React.ImgHTMLAttributes<HTMLElement> {
    activePanel: string;
}
export default function View(props: ViewProps): JSX.Element;
