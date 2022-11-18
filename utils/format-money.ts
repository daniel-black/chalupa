const usd = new Intl.NumberFormat('en-us', { currency: 'USD', style: 'currency' });

export default function formatMoney(amount: number): string {
  let formatted = usd.format(amount);
  
  if (amount > 100) {
    formatted = formatted.split('.')[0];
  }

  if (formatted.includes(',')) {
    formatted = formatted.split(',')[0] + 'K';
  }
  
  return formatted;
}