export interface CheckoutPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    open(options: {
        key: string;
        amount: string;
    }): Promise<{
        response: string;
    }>;
}
