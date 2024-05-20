import {Adaptive} from "../../../adaptive/";
import {asTransformProp} from "../../config";
import {ThemeTokens, ZnUIElevation} from "../../../theme";

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