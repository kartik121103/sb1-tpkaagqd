import React from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useForm } from '../../hooks/useForm';
import { emailRules } from '../../utils/validation';

interface SignupFormProps {
  onClose: () => void;
}

export function SignupForm({ onClose }: SignupFormProps) {
  const { values, errors, handleChange, handleBlur, isValid } = useForm(
    { name: '', email: '', password: '' },
    { email: emailRules }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid()) {
      // Handle signup logic here
      console.log('Signup:', values);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
      <Input
        icon={<User />}
        type="text"
        label="Full Name"
        value={values.name}
        onChange={(e) => handleChange('name', e.target.value)}
        required
      />
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
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
}