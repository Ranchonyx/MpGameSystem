export type uuid_t = `${string}-${string}-${string}-${string}-${string}`;
export function uuid(): uuid_t {
    return crypto.randomUUID();
}