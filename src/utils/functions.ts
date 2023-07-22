const isFunction = <T extends Function = Function>(value: any): value is T =>
    typeof value === "function"

export function runIfFn<T, U>(
    valueOrFn: T | ((...fnArgs: U[]) => T),
    ...args: U[]
): T {
    return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn
}