import {Adaptive} from "../../../adaptive/";
import {asTransformProp} from "../config";

export const insets = {
    insetsTop: asTransformProp((value: InsetsType) => ({ paddingTop: 'var(--znui-'+value+'-inset-top)'})),
    insetsBottom: asTransformProp((value: InsetsType) => ({ paddingBottom: 'var(--znui-'+value+'-inset-bottom)'})),
    insetsLeft: asTransformProp((value: InsetsType) => ({ paddingLeft: 'var(--znui-'+value+'-inset-left)'})),
    insetsRight: asTransformProp((value: InsetsType) => ({ paddingRight: 'var(--znui-'+value+'-inset-right)'})),
    insets: asTransformProp((value: InsetsType) => ({
        padding: 'var(--znui-'+value+'-inset-top) var(--znui-'+value+'-inset-right) ' +
            'var(--znui-'+value+'-inset-bottom) var(--znui-'+value+'-inset-left)'
    })),
}

export type InsetsType = 'keyboard'|'safe-area'|'all'

export interface InsetsProps {
    /**
     * @default undefined
     */
    insets?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsTop?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsBottom?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsLeft?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsRight?: Adaptive<InsetsType>
}