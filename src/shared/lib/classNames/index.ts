type Mods = Record<string, string | boolean>

export const classNames = (className: string, mods: Mods, additional: string[]): string => {
  return [
    className,
    ...Object.entries(mods)
        .filter(([key, value]) => Boolean(value))
        .map(([key]) => key),
    ...additional
  ].join(' ')
}