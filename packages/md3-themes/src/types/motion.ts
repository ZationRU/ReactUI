import {TransitionProps} from "@znui/base";

export interface ZnUITransitionPack {
    timingFunction: TransitionProps["transitionTimingFunction"],
    duration: TransitionProps["transitionDuration"] | number
}

export interface PhysicsTransitions {
    fast: ZnUITransitionPack
    default: ZnUITransitionPack
    slow: ZnUITransitionPack
}

export type ZnUIMotion = {
    duration: {
        short1: number
        short2: number
        short3: number
        short4: number
        medium1: number
        medium2: number
        medium3: number
        medium4: number
        long1: number
        long2: number
        long3: number
        long4: number
        extraLong1: number
        extraLong2: number
        extraLong3: number
        extraLong4: number
    }

    standard: string
    standardAccelerate: string
    standardDecelerate: string

    emphasized: string
    emphasizedAccelerate: string
    emphasizedDecelerate: string

    physics: {
        expressive: {
            spatial: PhysicsTransitions
            effects: PhysicsTransitions
        }

        standard: {
            spatial: PhysicsTransitions
            effects: PhysicsTransitions
        }
    }
}