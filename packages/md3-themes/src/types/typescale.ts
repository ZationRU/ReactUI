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