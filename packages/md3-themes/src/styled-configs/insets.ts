import {Adaptive, asTransformProp} from "@znui/base";

export const insets = {
    insetsTop: asTransformProp((value: InsetsType) => ({ paddingTop: 'var(--znui-'+value+'-inset-top)'})),
    insetsBottom: asTransformProp((value: InsetsType) => ({ paddingBottom: 'var(--znui-'+value+'-inset-bottom)'})),
    insetsLeft: asTransformProp((value: InsetsType) => ({ paddingLeft: 'var(--znui-'+value+'-inset-left)'})),
    insetsRight: asTransformProp((value: InsetsType) => ({ paddingRight: 'var(--znui-'+value+'-inset-right)'})),
    insets: asTransformProp((value: InsetsType) => ({
        padding: 'var(--znui-'+value+'-inset-top) var(--znui-'+value+'-inset-right) ' +
            'var(--znui-'+value+'-inset-bottom) var(--znui-'+value+'-inset-left)'
    })),
    insetsHorizontal: asTransformProp((value: InsetsType) => ({
        paddingLeft: 'var(--znui-'+value+'-inset-left)',
        paddingRight: 'var(--znui-'+value+'-inset-right)'
    })),
    insetsVertical: asTransformProp((value: InsetsType) => ({
        paddingLeft: 'var(--znui-'+value+'-inset-left)',
        paddingRight: 'var(--znui-'+value+'-inset-right)'
    })),
}

Object.assign(insets, {
    is: insets.insets,
    isL: insets.insetsLeft,
    isR: insets.insetsRight,
    isB: insets.insetsBottom,
    isT: insets.insetsTop,
    isH: insets.insetsHorizontal,
    isV: insets.insetsVertical,
})

export type InsetsType = 'keyboard'|'safe-area'|'all'

export interface InsetsProps {
    /**
     * @default undefined
     */
    insets?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    i?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsTop?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    ist?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsBottom?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    isb?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsLeft?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    isl?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsRight?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    isr?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsHorizontal?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    insetsVertical?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    isH?: Adaptive<InsetsType>

    /**
     * @default undefined
     */
    isV?: Adaptive<InsetsType>
}