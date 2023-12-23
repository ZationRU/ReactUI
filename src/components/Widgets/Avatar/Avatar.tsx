import classNames from "classnames";
import React from "react";
import {Center, Layout, LayoutProps} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import {Title} from "../../Typography";
import {ImageView} from "../ImageView/ImageView";

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

    const isTextAvatar = text && (!image)

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
            image && <ImageView
                src={image}
                alt={contentDescription}
                layoutSize='100%'
                verticalAlign='middle'
                objectFit='cover'
                pointerEvents='none'
            />
        }

        <Center as={Title} size='medium' fontSize={22/60*size} pos='absolute' posA={0}>
            {isTextAvatar && text}
        </Center>
    </Layout>
}