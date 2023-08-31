import classNames from "classnames";
import React, {useState} from "react";
import "./Avatar.css";
import {Layout, LayoutProps, znui} from "../../Basic";

export interface AvatarProps extends LayoutProps {
    image?: string
    text?: string
    size?: number
    contentDescription?: string
}

/**
 * Simple avatar with text as avatar support
 * @param props
 * @constructor
 */
export function Avatar(props: AvatarProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const {
        image,
        text,
        size = 60,
        className,
        style,
        contentDescription,
        ...otherProps
    } = props

    return <Layout className={classNames(
        className,
        classNames({
            'Avatar': true,
            'Avatar--text': text&&!image,
        })
    )} fontSize={22/60*size} layoutSize={size} {...otherProps}>
        {
            text&&!image ? text[0]:
                <znui.img
                    src={image}
                    alt={contentDescription}
                    transition='opacity 200ms'
                    oc={isLoaded? 1: 0}
                    onLoad={() => setIsLoaded(true)}
                />
        }
    </Layout>
}