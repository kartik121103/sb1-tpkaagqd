import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '../Navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 right-0 w-full max-w-xs bg-white h-full shadow-xl p-6">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-semibold text-gray-900">Menu</span>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <nav className="space-y-4">
          <Link href="#about">About</Link>
          <Link href="#stories">Stories</Link>
          <Link href="#register">Register</Link>
          <Link href="#resources">Resources</Link>
          <Link href="#faq">FAQ</Link>
        </nav>
      </div>
    </div>
  );
}