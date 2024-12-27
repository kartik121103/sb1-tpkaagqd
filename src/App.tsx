import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { StoriesSection } from './components/stories/StoriesSection';
import { RegistrationSteps } from './components/registration/RegistrationSteps';
import { ResourcesSection } from './components/resources/ResourcesSection';
import { FAQSection } from './components/faq/FAQSection';
import { ContactForm } from './components/contact/ContactForm';
import { NewsletterForm } from './components/newsletter/NewsletterForm';
import { SocialProof } from './components/social/SocialProof';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Statistics />
      <StoriesSection />
      <SocialProof />
      <RegistrationSteps />
      <ResourcesSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <NewsletterForm />
      </div>
      <FAQSection />
    </div>
  );
}

export default App;