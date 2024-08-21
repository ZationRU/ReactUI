import {Adaptive, asTransformProp} from "@znui/base";

export const text = {
    maxLines: asTransformProp((value: number) => ({
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: value,
    })),
}

export interface TextProps {
    /**
     * @default none
     */
    maxLines?: Adaptive<number>
}