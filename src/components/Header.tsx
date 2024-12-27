import React, { useState } from 'react';
import { Heart, Menu } from 'lucide-react';
import { Link } from './Navigation';
import { MobileMenu } from './navigation/MobileMenu';
import { AuthButtons } from './auth/AuthButtons';
import { Modal } from './ui/Modal';
import { LoginForm } from './auth/LoginForm';
import { SignupForm } from './auth/SignupForm';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">LifeLink</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <div className="flex space-x-8">
              <Link href="#about">About</Link>
              <Link href="#stories">Stories</Link>
              <Link href="#register">Register</Link>
              <Link href="#resources">Resources</Link>
              <Link href="#faq">FAQ</Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center">
            <AuthButtons
              onLogin={() => setIsLoginModalOpen(true)}
              onSignup={() => setIsSignupModalOpen(true)}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Auth Modals */}
      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <LoginForm onClose={() => setIsLoginModalOpen(false)} />
      </Modal>

      <Modal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)}>
        <SignupForm onClose={() => setIsSignupModalOpen(false)} />
      </Modal>
    </header>
  );
}