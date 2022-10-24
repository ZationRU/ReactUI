import React from "react";
export interface PanelProps extends React.ImgHTMLAttributes<HTMLElement> {
    id: string;
}
export default function Panel(params: PanelProps): JSX.Element;
