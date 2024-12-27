import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import { Button } from '../ui/Button';

interface AuthButtonsProps {
  onLogin: () => void;
  onSignup: () => void;
}

export function AuthButtons({ onLogin, onSignup }: AuthButtonsProps) {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="secondary" onClick={onLogin}>
        <LogIn className="h-4 w-4 mr-2" />
        Login
      </Button>
      <Button onClick={onSignup}>
        <UserPlus className="h-4 w-4 mr-2" />
        Sign Up
      </Button>
    </div>
  );
}