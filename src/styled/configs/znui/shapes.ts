import {Adaptive} from "../../../adaptive/";
import {asTransformProp} from "../../config";
import {ThemeTokens, ZnUIShapes} from "../../../theme";

export const shapes = {
    shapeScale: asTransformProp((value: keyof ZnUIShapes) => ({
        borderRadius: ThemeTokens.shapes[value],
    })),
    clip: asTransformProp((value: boolean) => (value ? {
        overflow: 'hidden',
    }: {})),
}

export interface ShapesProps {
    /**
     * @default none
     */
    shapeScale?: Adaptive<keyof ZnUIShapes>

    /**
     * @default false
     */
    clip?: Adaptive<boolean>
}