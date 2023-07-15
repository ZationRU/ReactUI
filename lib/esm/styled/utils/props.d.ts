import * as CSS from "csstype";
type CSSProp = keyof CSS.Properties | (string & {});
export interface PropConfig {
    property: CSSProp | CSSProp[];
}
export declare function propConfig<T extends CSSProp>(property: T | T[]): {
    property: T | T[];
};
export declare function runIfFn<T, U>(valueOrFn: T | ((...fnArgs: U[]) => T), ...args: U[]): T;
export {};
