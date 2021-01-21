declare module '@capacitor/core' {
  interface PluginRegistry {
    Checkout: CheckoutPlugin;
  }
}

export interface CheckoutPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  open(options: { value: string }): Promise<{ value: string }>;
}

