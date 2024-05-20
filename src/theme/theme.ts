import styled from '@emotion/styled'
import {useMemo} from "react";
import {kebabize} from "../utils";
import {defaultShapes} from "./shapes";
import {defaultStyles} from "./defaultStyles";
import {ZnUITheme} from "./theme.types";
import {defaultMotion} from "./motion";
import {durationProp, elevationProp, motionProp, paletteProp, shapeProp, styleProp} from "./names";
import {defaultElevation} from "./elevation";

export const useThemeDiv = (theme: ZnUITheme) => {
    return useMemo(() => {
        const {
            shapes = defaultShapes,
            motion = defaultMotion,
            elevation = defaultElevation,
            palettes,
            schemes
        } = theme

        let styles = defaultStyles
        for (const shapeName in shapes) {
            const shapeValue = typeof shapes[shapeName] == 'number' ? shapes[shapeName] + 'px': shapes[shapeName]
            styles += shapeProp(shapeName) + ': ' + shapeValue + ';'
        }

        for (const paletteName in palettes) {
            const palette = palettes[paletteName]
            for (const paletteNum in palette) {
                styles += paletteProp(palette, paletteNum) + ': ' + palette[paletteNum] + ';'
            }
        }

        for (const elevationKey in elevation) {
            styles += elevationProp(elevationKey) + ': ' +elevation[elevationKey] + ';'
        }

        for (const motionKey in motion) {
            const motionData = motion[motionKey]
            if(motionKey === 'duration') {
                for (const durationName in motionData) {
                    styles += durationProp(durationName) + ': ' + motionData[durationName] + 'ms;'
                }
            }else{
                styles += motionProp(motionKey) + ': ' + motionData + ';'
            }
        }

        for (const schemesKey in schemes) {
            const schemeData = schemes[schemesKey]
            styles += `&[data-scheme='${schemesKey}']{`
            styles += `color-scheme: ` + (schemesKey.startsWith('dark') ? 'dark': 'light') + ';'
            for (const schemeDataKey in schemeData) {
                styles += styleProp(schemeDataKey) + ': ' + schemeData[schemeDataKey] + ';'
            }

            styles += `}`
        }

        return styled.div`${styles}`
    }, [theme])
}