import {ZnUIScheme, ZnUISchemeContrast} from "../theme";
import {useEffect, useState} from "react";

export type ThemeProps = {
    scheme: ZnUIScheme
    schemeContrast: ZnUISchemeContrast
}

const subscribers: ((data: ThemeProps) => void)[] = []
const defaultProps: ThemeProps = {
    scheme: 'system',
    schemeContrast: 'standard'
}

export const useProps = () => {
    const [data, setData] = useState(defaultProps)
    useEffect(() => {
        subscribers.push(setData)
        return () => {
            subscribers.slice(subscribers.indexOf(setData), 1)
        }
    }, [setData]);

    return data
}

export const updateProps = (newData: ThemeProps) => {
    for (const subscriber of subscribers) {
        subscriber(newData)
    }
}