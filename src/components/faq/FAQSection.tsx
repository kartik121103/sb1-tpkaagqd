import React from 'react';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "Who can become an organ donor?",
    answer: "Anyone can register to be an organ donor regardless of age or medical history. Medical suitability for donation is determined at the time of death."
  },
  {
    question: "Does my religion support organ donation?",
    answer: "Most major religions support organ donation as an act of charity and generosity. Consult with your religious advisor for specific guidance."
  },
  {
    question: "Will organ donation affect my funeral arrangements?",
    answer: "No, organ donation does not affect funeral arrangements. Open-casket funerals are still possible, and there are no additional costs to the donor's family."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}