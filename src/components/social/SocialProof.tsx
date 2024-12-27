import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    count: '10,000+',
    label: 'Registered Donors',
  },
  {
    icon: Heart,
    count: '5,000+',
    label: 'Lives Saved',
  },
  {
    icon: Award,
    count: '95%',
    label: 'Satisfaction Rate',
  },
];

export function SocialProof() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map(({ icon: Icon, count, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-12 w-12 text-red-500" />
              <p className="mt-4 text-3xl font-bold text-gray-900">{count}</p>
              <p className="mt-2 text-lg text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}