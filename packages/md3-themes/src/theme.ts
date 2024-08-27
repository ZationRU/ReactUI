import styled from '@emotion/styled'
import {useMemo} from "react";
import {kebabize} from "@znui/utils";
import {defaultStyles} from "./defaults";
import {ZnUITheme} from "./types";
import {durationProp, elevationProp, motionProp, paletteProp, shapeProp, styleProp, typeScaleProp} from "./names";

export const useThemeDiv = (theme: ZnUITheme) => {
    return useMemo(() => {
        const {
            shapes,
            motion,
            elevation,
            typeScale,
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
                styles += paletteProp(paletteName, paletteNum) + ': ' + palette[paletteNum] + ';'
            }
        }

        for (const type in typeScale) {
            const typeScales = typeScale[type]
            for (const scale in typeScales) {
                const props = typeScales[scale]
                for (const prop in props) {
                    const value = typeof props[prop] == 'number' ? props[prop] + 'px': props[prop]
                    styles += typeScaleProp(type, scale, prop) + ': ' + value + ';'
                }
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
            styles += `&[data-scheme='${kebabize(schemesKey)}']{`
            styles += `color-scheme: ` + (schemesKey.startsWith('dark') ? 'dark': 'light') + ';'
            for (const schemeDataKey in schemeData) {
                styles += styleProp(schemeDataKey) + ': ' + schemeData[schemeDataKey] + ';'
            }

            styles += `}`
        }

        const defaultTextTypeScale = typeScale.body.medium
        styles += `
             font-size: ${defaultTextTypeScale.fontSize}px;
             font-weight: ${defaultTextTypeScale.fontWeight};
             font-family: ${defaultTextTypeScale.fontFamilyName};
             font-style: ${defaultTextTypeScale.fontFamilyStyle};
             letter-spacing: ${defaultTextTypeScale.letterSpacing}px;
             line-height: ${defaultTextTypeScale.lineHeight}px;
        `

        return styled.div`${styles}`
    }, [theme])
}