export type ApiKeyType = `test_${string}` | `prod_${string}`

export interface Order {
    cname: string,
    email: string,
    phone: number,
    amount: number,
    receiptId: string,
    key: ApiKeyType,
    callbackUrl: string,
    notes: 
};