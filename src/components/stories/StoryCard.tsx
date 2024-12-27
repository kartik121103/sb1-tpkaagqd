import React from 'react';
import { Quote } from 'lucide-react';

interface StoryCardProps {
  name: string;
  type: 'donor' | 'recipient';
  image: string;
  story: string;
}

export function StoryCard({ name, type, image, story }: StoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
          {type === 'donor' ? 'Donor Story' : 'Recipient Story'}
        </div>
      </div>
      <div className="p-6">
        <Quote className="h-8 w-8 text-red-500 mb-4" />
        <p className="text-gray-600 mb-4">{story}</p>
        <p className="font-semibold text-gray-900">- {name}</p>
      </div>
    </div>
  );
}