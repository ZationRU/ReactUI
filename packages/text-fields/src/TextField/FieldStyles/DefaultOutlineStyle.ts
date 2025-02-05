import {TextFieldStyle} from "../TextField";
import {ThemeTokens} from "@znui/md3-themes";

export const DefaultOutlineStyle: TextFieldStyle = {
    font: ThemeTokens.typeScales.body.large,
    root: {
        focused: {
            borderWidth: 3,
            borderColor: ThemeTokens.primary,
            color: ThemeTokens.primary,
        },
        error: {
            borderWidth: '3px!important',
            borderColor: ThemeTokens.error + '!important',
            color: ThemeTokens.error + '!important',
        },
        boxSizing: 'border-box',
        shapeScale: 'esm',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: ThemeTokens.outline,
        pb: 6
    },
    input: {
        focused: {
            ml: 4,
            w: 'calc(100% - 6px)',
        },
        ml: 6,
        w: 'calc(100% - 8px)',
        background: 'none',
        h: 24,
        textOverflow: 'ellipsis',
    },
    textarea: {
        focused: {
            ml: 4,
            w: 'calc(100% - 8px)',
        },
        resize: 'none',
        w: 'calc(100% - 10px)',
        ml: 6,
        background: 'none',
        textOverflow: 'ellipsis',
        mv: 8,
    },
    legend: {
        focused: {
            to: {
                baseDuration: ThemeTokens.motion.duration.short1,
                pl: 4,
                pr: 3,
                maxW: '100vw',
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: 0.4,
                lineHeight: '16px'
            }
        },
        padding: 0,
        maxW: 0,
        oc: 0,
        h: 18
    },
    label: {
        to: {
            baseDuration: ThemeTokens.motion.duration.short1,
            top: 4,
            fontSize: {}
        },
        focused: {
            to: {
                top: -17,
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: 0.4,
                lineHeight: '16px'
            },
        },
        ph: 4,
    }
}