import React, {ForwardedRef, Ref} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {Center, Layout, LayoutProps} from "@znui/layouts";
import {ImageView} from "../ImageView/ImageView";
import {Title} from "@znui/typography";

export interface AvatarProps extends LayoutProps {
    image?: string
    text?: string
    size?: number
    contentDescription?: string
    imageRef?: Ref<HTMLImageElement>
}

/**
 * Simple avatar with text as avatar support
 * @param props
 * @constructor
 */
export const Avatar = React.forwardRef(
    (
        props: AvatarProps,
        ref: ForwardedRef<HTMLDivElement>
    ) => {
        const {
            image,
            text,
            size = 60,
            style,
            contentDescription,
            to,
            imageRef,
            ...otherProps
        } = props

        const isTextAvatar = text && (!image)

        return <Layout
            shapeScale='full'
            clip={true}
            ref={ref}
            userSelect='none'
            to={{
                ...to,
                bg: isTextAvatar ?
                    ThemeTokens.primaryContainer:
                    ThemeTokens.surfaceContainerHigh,
                minLayoutSize: size,
                layoutSize: size
            }}
            c={ThemeTokens.onPrimaryContainer}
            pos='relative'
            {...otherProps}
        >
            {
                image && <ImageView
                    src={image}
                    ref={imageRef}
                    alt={contentDescription || text}
                    layoutSize='100%'
                    verticalAlign='middle'
                    objectFit='cover'
                    pointerEvents='none'
                />
            }

            <Center as={Title} size='medium' fontSize={22/60*size} pos='absolute' posA={0}>
                {isTextAvatar && text?.at(0)?.toUpperCase()}
            </Center>
        </Layout>
    }
)

Avatar.displayName = 'Avatar'