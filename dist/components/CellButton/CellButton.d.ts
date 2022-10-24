import React from "react";
import "./CellButton.css";
export interface CellButtonProps extends React.ImgHTMLAttributes<HTMLButtonElement> {
    appearance?: "accent" | "positive" | "negative";
    before?: JSX.Element;
    after?: JSX.Element;
}
export default function CellButton(props: CellButtonProps): JSX.Element;
