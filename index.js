export const pipeline = (...fns) => x => fns.reduce((arg, fn) => fn(arg), x);
