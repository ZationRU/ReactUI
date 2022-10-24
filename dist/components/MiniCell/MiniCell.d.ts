import React from "react";
import "./MiniCell.css";
export interface MiniCellProps extends React.ImgHTMLAttributes<HTMLElement> {
    before?: JSX.Element;
}
export default function MiniCell(props: MiniCellProps): JSX.Element;
