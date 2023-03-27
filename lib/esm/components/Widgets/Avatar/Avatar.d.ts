import React from "react";
import "./Avatar.css";
export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
    image?: string;
    text?: string;
    size?: number;
}
export default function Avatar(props: AvatarProps): JSX.Element;
