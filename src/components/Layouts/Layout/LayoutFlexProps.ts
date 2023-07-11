export interface LayoutFlexProps {
    /**
     * @default column
     */
    direction?: 'column'|'row'

    /**
     * @default false
     */
    reverse?: boolean

    /**
     * @default true
     */
    warp?: boolean

    /**
     * @default null
     */
    flex?: number|null

    /**
     * @default null
     */

    gap?: number|null
}