import classNames from "classNames";
import React from "react";
import "./Avatar.css";

export interface AvatarProps extends React.HTMLAttributes<HTMLImageElement>{
    image?: string
    text?: string
    size?: number
}

export function Avatar(props: AvatarProps) {
    const {
        image,
        text,
        size = 60,
        className,
        ...otherProps
    } = props

    return <div className={classNames(
        className,
        classNames({
            'Avatar': true,
            'Avatar--text': text&&!image,
        })
    )} style={{
        width: size,
        height: size,
        fontSize: 22/60*size
    }}>
        {
            text&&!image ? text[0]:
                <img src={image} alt="" {...otherProps} />
        }
    </div>
}