import {ZnUIMotion} from "../types";

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

    physics: {
        expressive: {
            spatial: {
                slow: {
                    timingFunction: "cubic-bezier(0.39, 1.29, 0.35, 0.98)",
                    duration: 650
                },
                default: {
                    timingFunction: "cubic-bezier(0.38, 1.21, 0.22, 1.00)",
                    duration: 500
                },
                fast: {
                    timingFunction: "cubic-bezier(0.42, 1.67, 0.21, 0.90)",
                    duration: 350
                }
            },
            effects: {
                slow: {
                    timingFunction: "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
                    duration: 300
                },
                default: {
                    timingFunction: "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
                    duration: 200
                },
                fast: {
                    timingFunction: "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
                    duration: 150
                }
            }
        },
        standard: {
            spatial: {
                slow: {
                    timingFunction: "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
                    duration: 750
                },
                default: {
                    timingFunction: "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
                    duration: 500
                },
                fast: {
                    timingFunction: "cubic-bezier(0.27, 1.06, 0.18, 1.00)",
                    duration: 350
                }
            },
            effects: {
                slow: {
                    timingFunction: "cubic-bezier(0.34, 0.88, 0.34, 1.00)",
                    duration: 300
                },
                default: {
                    timingFunction: "cubic-bezier(0.34, 0.80, 0.34, 1.00)",
                    duration: 200
                },
                fast: {
                    timingFunction: "cubic-bezier(0.31, 0.94, 0.34, 1.00)",
                    duration: 150
                }
            }
        }
    },
}