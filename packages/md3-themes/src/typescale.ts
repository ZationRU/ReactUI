export type ZnUITextTypeScale = {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
}

export type ZnUITextType = {
    large: ZnUITextTypeScale
    medium: ZnUITextTypeScale
    small: ZnUITextTypeScale
}

export type ZnUITypeScales = {
    display: ZnUITextType
    headline: ZnUITextType
    body: ZnUITextType
    label: ZnUITextType
    title: ZnUITextType
}

export const defaultTypeScale: ZnUITypeScales = {
    display: {
        large: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 57,
            lineHeight: 64,
            letterSpacing: -0.25
        },
        medium: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 45,
            lineHeight: 53,
            letterSpacing: 0
        },
        small: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 36,
            lineHeight: 44,
            letterSpacing: 0
        }
    },
    headline: {
        large: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 32,
            lineHeight: 40,
            letterSpacing: 0
        },
        medium: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 28,
            lineHeight: 36,
            letterSpacing: 0
        },
        small: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 32,
            letterSpacing: 0
        }
    },
    body: {
        large: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.5
        },
        medium: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.25
        },
        small: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0.4
        }
    },
    label: {
        large: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Medium',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.1
        },
        medium: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Medium',
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 20,
            letterSpacing: 0.5
        },
        small: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Medium',
            fontWeight: 500,
            fontSize: 11,
            lineHeight: 16,
            letterSpacing: 0.5
        }
    },
    title: {
        large: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Regular',
            fontWeight: 400,
            fontSize: 22,
            lineHeight: 28,
            letterSpacing: 0
        },
        medium: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Medium',
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0.15
        },
        small: {
            fontFamilyName: 'Roboto',
            fontFamilyStyle: 'Medium',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0.1
        }
    }
}