import {ZnUISchemeData, ZnUITheme, ZnUIMotion, ZnUIElevation, ZnUIShapes, ZnUITypeScales} from "./types";
import {
    durationProp,
    elevationProp,
    motionProp,
    paletteProp,
    propAsCSSVar,
    shapeProp,
    styleProp,
    typeScaleProp
} from "./names";

const NestedThemeTokens = {
    shapes: new Proxy({}, {
        get(_, prop) {
            return propAsCSSVar(shapeProp(prop.toString()));
        },
    }) as ZnUIShapes,
    elevation: new Proxy({}, {
        get(_, prop) {
            return propAsCSSVar(elevationProp(prop.toString()));
        },
    }) as ZnUIElevation,
    motion: new Proxy({}, {
        get(_, prop) {
            if(prop === 'duration') {
                return new Proxy({}, {
                    get(_, type) {
                        return propAsCSSVar(durationProp(type.toString()));
                    },
                })
            }

            return propAsCSSVar(motionProp(prop.toString()));
        },
    }) as Omit<ZnUIMotion, 'duration'> & {
        duration: Record<keyof ZnUIMotion['duration'], string>
    },
    typeScales: new Proxy({}, {
        get(_, type) {
            return new Proxy({}, {
                get(_, scale) {
                    return new Proxy({}, {
                        get(_, prop) {
                            return propAsCSSVar(typeScaleProp(type.toString(), scale.toString(), prop.toString()));
                        },
                    })
                },
            })
        },
    }) as ZnUITypeScales,
    palettes: new Proxy({}, {
        get(_, palette) {
            return new Proxy({}, {
                get(_, num) {
                    return propAsCSSVar(paletteProp(palette.toString(), num.toString()));
                },
            }) as ZnUITheme['palettes']
        },
    }) as ZnUITheme['palettes']
}

export const ThemeTokens = new Proxy(NestedThemeTokens, {
    get(target, prop) {
        if(prop in target) {
            return target[prop]
        }

        return propAsCSSVar(styleProp(prop.toString()));
    },
}) as ZnUISchemeData & typeof NestedThemeTokens