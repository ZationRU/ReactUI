import React from "react";

export const mergeRefs = <T extends HTMLElement>(...refs: React.ForwardedRef<T>[]): React.RefCallback<T> => {
    return (node: T) => {
        for (const ref of refs) {
            if(ref) {
                if(typeof ref === 'function') {
                    ref(node)
                }else{
                    ref.current = node
                }
            }

        }
    }
}