import {Adaptive} from "../../../adaptive/Adaptive";
import {asTransformProp} from "../config";

type ShapeScale = 'none'|'esm'|'sm'|'md'|'lg'|'elg'|'full'

export const shapes = {
    shapeScale: asTransformProp((value: ShapeScale) => ({
        borderRadius: 'var(--znui-shape-'+value+'-radius)',
    }))
}

export interface ShapesProps {
    /**
     * @default none
     */
    shapeScale?: Adaptive<ShapeScale>
}