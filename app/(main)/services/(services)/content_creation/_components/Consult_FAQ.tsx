import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function Consult_FAQ() {
    return (
        <div className='flex flex-col items-center justify-center w-full max-w-7xl p-5'>
        <div className='flex flex-col items-center justify-center gap-8 min-h-screen bg-opacity-5'>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold `}>Frequent Ask Question</h2>
            <p className='text-black max-w-xl md:text-lg text-base text-center'>Let me answer the puzzle of your mind and provide you answer of frequest question ask by our clients
            </p>
            <Accordion type="single" collapsible className="max-w-4xl w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger><h3 className='text-xl'>Is it accessible?</h3></AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger><h3 className='text-xl'>Is it styled?</h3></AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger><h3 className='text-xl'>Is it animated?</h3></AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        </div>
    </div>
    )
}

export default Consult_FAQ