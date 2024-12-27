import React from 'react';
import { ClipboardCheck, FileCheck, Heart, Mail } from 'lucide-react';

const steps = [
  {
    title: 'Fill Basic Information',
    description: 'Provide your name, age, and contact details',
    icon: ClipboardCheck,
  },
  {
    title: 'Review Guidelines',
    description: 'Read and understand the donation process and guidelines',
    icon: FileCheck,
  },
  {
    title: 'Choose Donation Type',
    description: 'Select which organs you wish to donate',
    icon: Heart,
  },
  {
    title: 'Receive Confirmation',
    description: 'Get your donor card and registration confirmation',
    icon: Mail,
  },
];

export function RegistrationSteps() {
  return (
    <section className="py-16 bg-white" id="register">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Registration Process
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Four simple steps to become an organ donor
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <step.icon className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-center text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#start-registration"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
          >
            Start Registration
          </a>
        </div>
      </div>
    </section>
  );
}