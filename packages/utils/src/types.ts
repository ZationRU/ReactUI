import React from "react";

export type DistributiveOmit<T, K extends keyof any> = T extends unknown
    ? Omit<T, K>
    : never

export type Assign<T, U> = DistributiveOmit<T, keyof U> & U

export type BasicForwardedRefComponent<Props, Ref> =
    React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<Ref>>

export type Point = { x: number, y: number }