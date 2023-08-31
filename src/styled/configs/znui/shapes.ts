import {Adaptive} from "../../../adaptive/";
import {asTransformProp} from "../../config";

type ShapeScale = 'none'|'esm'|'sm'|'md'|'lg'|'elg'|'full'

export const shapes = {
    shapeScale: asTransformProp((value: ShapeScale) => ({
        borderRadius: 'var(--znui-shape-'+value+'-radius)',
    })),
    clip: asTransformProp((value: boolean) => (value ? {
        overflow: 'hidden',
    }: {})),
}

export interface ShapesProps {
    /**
     * @default none
     */
    shapeScale?: Adaptive<ShapeScale>

    /**
     * @default false
     */
    clip?: Adaptive<boolean>
}