export const kebabize = (value: string) => value.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (it, offset) => (offset ? "-" : "") + it.toLowerCase())
