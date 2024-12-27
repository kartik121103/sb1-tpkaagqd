import React from 'react';
import { ResourceCard } from './ResourceCard';

const resources = [
  {
    title: 'Understanding Brain Death',
    description: 'Learn about the medical criteria for determining brain death and its implications for organ donation.',
    category: 'Medical',
    link: '#medical-resources',
  },
  {
    title: 'Legal Framework',
    description: 'Overview of laws and regulations governing organ donation in your region.',
    category: 'Legal',
    link: '#legal-resources',
  },
  {
    title: 'Support Groups',
    description: 'Connect with donor families and transplant recipients through local support groups.',
    category: 'Support',
    link: '#support-resources',
  },
];

export function ResourcesSection() {
  return (
    <section className="py-16 bg-gray-50" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Educational Resources
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Learn more about organ donation and its impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}