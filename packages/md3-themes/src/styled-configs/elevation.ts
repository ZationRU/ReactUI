import {Adaptive, asTransformProp} from "@znui/base";
import {ThemeTokens} from "../ThemeTokens";
import {ZnUIElevation} from "../types";

export const elevation = {
    elevation: asTransformProp((value: keyof ZnUIElevation | false) => ({
        boxShadow: ThemeTokens.elevation[value || '0']
    })),
}

Object.assign(elevation, {
    z: elevation.elevation
})

export interface ElevationProps {
    /**
     * @default false
     */
    elevation?: Adaptive<keyof ZnUIElevation | false>

    /**
     * @default none
     */
    z?: Adaptive<keyof ZnUIElevation | false>
}