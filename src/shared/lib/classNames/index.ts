type Mods = Record<string, string | boolean>;

export const classNames = (
  className: string,
  mods: Mods = {},
  additional: string[] = [],
): string => [
  className,
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key),
  ...additional.filter(Boolean),
].join(' ').trim();
