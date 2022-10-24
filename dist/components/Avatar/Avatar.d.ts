import React from "react";
import "./Avatar.css";
export interface AvatarProps extends React.ImgHTMLAttributes<HTMLElement> {
    size?: "mini" | "small" | "medium" | "big";
    badge?: JSX.Element;
}
export default function Avatar({ src, size, ...props }: AvatarProps): JSX.Element;
