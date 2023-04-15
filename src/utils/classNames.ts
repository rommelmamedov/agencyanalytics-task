export const classNames = (...classNames: (string | undefined | null)[]) => classNames.filter(Boolean).join(' ');
