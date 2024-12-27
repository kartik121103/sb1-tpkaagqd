export type ValidationRule = {
  test: (value: string) => boolean;
  message: string;
};

export const emailRules: ValidationRule[] = [
  {
    test: (value) => value.length > 0,
    message: 'Email is required',
  },
  {
    test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: 'Please enter a valid email address',
  },
];

export const phoneRules: ValidationRule[] = [
  {
    test: (value) => !value || /^\(\d{3}\) \d{3}-\d{4}$/.test(value),
    message: 'Please enter a valid phone number: (555) 555-5555',
  },
];

export function validateField(value: string, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    if (!rule.test(value)) {
      return rule.message;
    }
  }
  return null;
}