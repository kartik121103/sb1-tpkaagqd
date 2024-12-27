import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { Button } from '../ui/Button';
import { useForm } from '../../hooks/useForm';
import { emailRules, phoneRules } from '../../utils/validation';
import { formatPhoneNumber } from '../../utils/formatting';

type ContactFormData = {
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    isValid,
  } = useForm<ContactFormData>(
    { email: '', phone: '', message: '' },
    {
      email: emailRules,
      phone: phoneRules,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid()) {
      // Handle form submission
      console.log('Form submitted:', values);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        icon={<Mail />}
        type="email"
        label="Email"
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value)}
        onBlur={() => handleBlur('email')}
        error={errors.email}
        placeholder="your@email.com"
        required
      />
      <Input
        icon={<Phone />}
        type="tel"
        label="Phone"
        value={values.phone}
        onChange={(e) => handleChange('phone', formatPhoneNumber(e.target.value))}
        onBlur={() => handleBlur('phone')}
        error={errors.phone}
        placeholder="(555) 555-5555"
      />
      <TextArea
        label="Message"
        value={values.message}
        onChange={(e) => handleChange('message', e.target.value)}
        placeholder="How can we help you?"
        required
      />
      <Button type="submit">
        Send Message
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}