import classNames from "classnames";
import React, {useState} from "react";
import {Center, Layout, LayoutProps, znui} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import {Title} from "../../Typography";

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
        to,
        ...otherProps
    } = props

    const isTextAvatar = text && (!image||!isLoaded)

    return <Layout
        className={classNames(
            className,
            classNames({
                'Avatar': true,
                'Avatar--text': isTextAvatar,
            })
        )}
        shapeScale='full'
        clip={true}
        userSelect='none'
        to={{
            ...to,
            bg: isTextAvatar ?
                ThemeTokens.primaryContainer:
                ThemeTokens.surfaceContainerHigh,
        }}
        c={ThemeTokens.onPrimaryContainer}
        minLayoutSize={size}
        layoutSize={size}
        pos='relative'
        {...otherProps}
    >
        {
            image && <znui.img
                src={image}
                alt={contentDescription}
                to={{ oc: isLoaded? 1: 0 }}
                layoutSize='100%'
                verticalAlign='middle'
                objectFit='cover'
                pointerEvents='none'
                fontWeight={500}
                onLoad={() => setIsLoaded(true)}
            />
        }

        <Center as={Title} size='medium' fontSize={22/60*size} pos='absolute' posA={0}>
            {isTextAvatar && text}
        </Center>
    </Layout>
}