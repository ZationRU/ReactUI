import {kebabize} from "../utils";

export const styleProp = (tokenName: string) => {
    return '--znui-' + kebabize(tokenName);
}

export const shapeProp = (shapeName: string) => {
    return '--znui-shape-' + kebabize(shapeName) + '-radius';
}

export const paletteProp = (palette: string, num: string) => {
    return '--znui-palette-' + palette + '-' + num;
}

export const motionProp = (name: string) => {
    return '--znui-' + kebabize(name) + '-motion';
}

export const durationProp = (name: string) => {
    return '--znui-' + name + '-motion';
}

export const elevationProp = (name: string) => {
    return '--znui-elevation-' + name;
}

export const propAsCSSVar = (prop: string) => 'var('+prop+')';