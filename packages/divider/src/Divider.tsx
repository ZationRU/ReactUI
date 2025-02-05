import {ThemeTokens} from "@znui/md3-themes";
import {HTMLZnUIProps, znui} from "@znui/base";

export type DividerProps = HTMLZnUIProps<"div">

export const Divider = znui("div", {
    baseStyle: {
        h: "1px",
        background: ThemeTokens.outlineVariant
    }
})

export const VerticalDivider = znui("div", {
    baseStyle: {
        w: "1px",
        h: "100%",
        background: ThemeTokens.outlineVariant
    }
})