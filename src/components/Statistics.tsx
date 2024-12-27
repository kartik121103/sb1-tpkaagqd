import React from 'react';
import { Users, Clock, Heart, Activity } from 'lucide-react';

const stats = [
  {
    id: 1,
    stat: '106,000+',
    title: 'People Waiting',
    description: 'Men, women, and children on the national transplant waiting list',
    icon: Users,
  },
  {
    id: 2,
    stat: '17',
    title: 'Daily Deaths',
    description: 'People die each day waiting for a transplant',
    icon: Clock,
  },
  {
    id: 3,
    stat: '8',
    title: 'Lives Saved',
    description: 'Lives that can be saved by one organ donor',
    icon: Heart,
  },
  {
    id: 4,
    stat: '75',
    title: 'Lives Enhanced',
    description: 'People who can be helped by tissue donation',
    icon: Activity,
  },
];

export function Statistics() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Impact of Organ Donation
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Every donation matters. Here's why your decision to become a donor is so important.
          </p>
        </div>
        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div className="absolute bg-red-500 rounded-md p-3">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                  {item.title}
                </p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              </dd>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}