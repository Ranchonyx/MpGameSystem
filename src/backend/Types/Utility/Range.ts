export type Range<T extends number> = number extends T ? number: _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T ? R[number] : _Range<T, [R["length"], ...R]>;