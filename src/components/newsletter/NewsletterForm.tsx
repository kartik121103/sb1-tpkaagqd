import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <div className="bg-red-50 p-8 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Stay Informed
      </h3>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter for updates on organ donation news and success stories.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          icon={<Mail />}
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
        />
        <Button type="submit">
          Subscribe
        </Button>
        {status === 'success' && (
          <p className="text-green-600">Thanks for subscribing!</p>
        )}
      </form>
    </div>
  );
}