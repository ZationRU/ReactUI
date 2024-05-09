import {useCallback, useState} from "react";

export const useToggle = (defaultValue: boolean) => {
    const [state, setState] = useState(defaultValue)
    return [state, useCallback(() => setState(it => !it), [setState])]
}