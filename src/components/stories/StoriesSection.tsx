import React from 'react';
import { StoryCard } from './StoryCard';

const stories = [
  {
    name: "Sarah Johnson",
    type: "donor" as const,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    story: "I registered as a donor because I believe we all have the power to give the gift of life. It's a decision that costs nothing but means everything."
  },
  {
    name: "Michael Chen",
    type: "recipient" as const,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    story: "Thanks to my donor, I received a heart transplant that gave me a second chance at life. Every day is a gift, and I'm forever grateful."
  }
];

export function StoriesSection() {
  return (
    <section className="py-16 bg-gray-50" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Stories of Hope
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Real stories from donors and recipients that show the impact of organ donation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.name} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}