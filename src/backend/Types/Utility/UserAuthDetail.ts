export type UserAuthDetail = {
    accountIdentifier: string | `${string}@${string}.com`;
    plainPassword: string;
}