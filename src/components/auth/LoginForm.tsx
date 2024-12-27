import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useForm } from '../../hooks/useForm';
import { emailRules } from '../../utils/validation';

interface LoginFormProps {
  onClose: () => void;
}

export function LoginForm({ onClose }: LoginFormProps) {
  const { values, errors, handleChange, handleBlur, isValid } = useForm(
    { email: '', password: '' },
    { email: emailRules }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid()) {
      // Handle login logic here
      console.log('Login:', values);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
      <Input
        icon={<Mail />}
        type="email"
        label="Email"
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value)}
        onBlur={() => handleBlur('email')}
        error={errors.email}
        required
      />
      <Input
        icon={<Lock />}
        type="password"
        label="Password"
        value={values.password}
        onChange={(e) => handleChange('password', e.target.value)}
        required
      />
      <div className="flex items-center justify-between">
        <a href="#" className="text-sm text-red-500 hover:text-red-600">
          Forgot password?
        </a>
      </div>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}