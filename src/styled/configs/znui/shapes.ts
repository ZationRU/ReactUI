import {Adaptive} from "../../../adaptive/";
import {asTransformProp} from "../../config";
import {ThemeTokens, ZnUIShapes} from "../../../theme";

export const shapes = {
    shapeScale: asTransformProp((value: keyof ZnUIShapes) => ({
        borderRadius: ThemeTokens.shapes[value],
    })),
    shapeScaleTop: asTransformProp((value: keyof ZnUIShapes) => ({
        borderTopLeftRadius: ThemeTokens.shapes[value],
        borderTopRightRadius: ThemeTokens.shapes[value],
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
     * @default none
     */
    shapeScaleTop?: Adaptive<keyof ZnUIShapes>

    /**
     * @default none
     */
    shapeScaleBottom?: Adaptive<keyof ZnUIShapes>

    /**
     * @default false
     */
    clip?: Adaptive<boolean>
}