import { useState, useCallback } from 'react';
import { ValidationRule, validateField } from '../utils/validation';

type FieldValidations<T> = {
  [K in keyof T]?: ValidationRule[];
};

export function useForm<T extends Record<string, string>>(
  initialValues: T,
  validations: FieldValidations<T>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const handleChange = useCallback((name: keyof T, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const rules = validations[name];
      if (rules) {
        const error = validateField(value, rules);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  }, [touched, validations]);

  const handleBlur = useCallback((name: keyof T) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const rules = validations[name];
    if (rules) {
      const error = validateField(values[name], rules);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [values, validations]);

  const isValid = useCallback(() => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    Object.keys(validations).forEach((key) => {
      const rules = validations[key as keyof T];
      if (rules) {
        const error = validateField(values[key as keyof T], rules);
        if (error) {
          newErrors[key as keyof T] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validations]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
  };
}