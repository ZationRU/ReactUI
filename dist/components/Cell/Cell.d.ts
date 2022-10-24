import React from "react";
import "./Cell.css";
export interface CellProps extends React.ImgHTMLAttributes<HTMLElement> {
    before?: JSX.Element;
    after?: JSX.Element;
    titleDescription?: JSX.Element | string;
    description?: JSX.Element | string;
}
export default function Cell(props: CellProps): JSX.Element;
