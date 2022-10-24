import React from "react";
import "./Avatar.css"
import {classNames} from "../../utils";
import Card from "../Card/Card"
import UserIcon from "../../icons/User Icon.svg"

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLElement> {
    size?: "mini"|"small"|"medium"|"big";
    badge?: JSX.Element;
}

export default function Avatar({ src, size, ...props }: AvatarProps) {
    return <Card {...props} className={
        classNames(
            "Avatar",
            "Avatar-"+ (size ?? "medium"),
            props.className
        )
    }>
        {src ? <img src={src} alt="" loading="lazy"/> :
            <UserIcon/>
        }
    </Card>
}