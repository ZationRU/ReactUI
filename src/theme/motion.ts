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
}

export const defaultMotion: ZnUIMotion = {
    duration: {
        short1: 50,
        short2: 100,
        short3: 150,
        short4: 200,
        medium1: 250,
        medium2: 300,
        medium3: 350,
        medium4: 400,
        long1: 450,
        long2: 500,
        long3: 550,
        long4: 600,
        extraLong1: 700,
        extraLong2: 800,
        extraLong3: 900,
        extraLong4: 1000
    },
    standard: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
    standardAccelerate: 'cubic-bezier(0, 0, 0, 1)',
    standardDecelerate: 'cubic-bezier(0.3, 0, 1, 1)',

    emphasized: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
    emphasizedAccelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
    emphasizedDecelerate: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
}