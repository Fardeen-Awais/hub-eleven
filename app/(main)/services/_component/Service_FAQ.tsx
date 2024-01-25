import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Service_FAQ = ({ faq }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl min-h-full py-10">
      <div className="flex flex-col items-center justify-center gap-8 bg-opacity-5">
        <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold `}>
          Frequent Ask Question
        </h3>
        <p className="text-black max-w-xl md:text-lg text-base text-center">
          Let me answer the puzzle of your mind and provide you answers to
          frequent questions asked by our clients.
        </p>
        <Accordion type="single" collapsible className="max-w-4xl w-full">
          {faq.map(({ question, answer }: any, index: number) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <h4 className="text-lg text-start">{question}</h4>
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Service_FAQ;
