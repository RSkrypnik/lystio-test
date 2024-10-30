export const formatCurrency = (amount: number, options?: Intl.NumberFormatOptions) =>
  Intl.NumberFormat('en-EN', { ...options, style: "currency" }).format(amount);

export const formatEur = (amount: number, options?: Intl.NumberFormatOptions) =>
  formatCurrency(amount, { currency: "EUR", currencyDisplay: "symbol", ...options })