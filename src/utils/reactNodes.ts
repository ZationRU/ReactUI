import {ReactFragment, ReactNode} from "react";

export function getArrayByReactNode(node: ReactNode): ReactFragment {
    if(Array.isArray(node)) {
        return node
    }

    return [ node ]
}