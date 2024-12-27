import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  category: string;
}

export function ResourceCard({ title, description, link, category }: ResourceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-sm text-red-500 font-medium mb-2">{category}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-red-500 hover:text-red-600"
      >
        Learn More
        <ExternalLink className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
}