import {TextFieldStyle} from "../TextField";
import {ThemeTokens} from "@znui/md3-themes";

export const DefaultFilledStyle: TextFieldStyle = {
    font: ThemeTokens.typeScales.body.large,
    root: {
        focused: {
            borderBottom: '3px solid',
            borderBottomColor: ThemeTokens.primary,
            color: ThemeTokens.primary
        },
        error: {
            borderBottom: '3px solid!important',
            borderBottomColor: ThemeTokens.error + '!important',
            color: ThemeTokens.error + '!important',
        },
        bg: ThemeTokens.surfaceContainerHighest,
        borderLeft: 'none!important',
        borderRight: 'none!important',
        borderTop: 'none!important',
        borderBottom: '1px solid',
        boxSizing: 'border-box',
        borderBottomColor: ThemeTokens.outline,
        shapeScaleTop: 'esm'
    },
    input: {
        focused: {},
        w: 'calc(100% - 4px)',
        ml: 4,
        pt: 16,
    },
    textarea: {
        focused: {},
        w: 'calc(100% - 4px)',
        ml: 4,
        mt: 16,
        resize: "none"
    },
    legend: {
        focused: {
            to: {
                ph: 4,
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
            fontSize: {},
            top: 4
        },
        focused: {
            to: {
                top: 0,
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: 0.4,
                lineHeight: '16px'
            },
        },

        ph: 4,
    }
}