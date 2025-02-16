import { faq_data } from "@/constants";
import { SectionHeading } from "./section-heading";
import { SectionTag } from "./section-tag";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
export function FAQ() {
  const [openValue, setOpenValue] = useState("");

  return (
    <div className="h-auto font-oxanium text-primary py-10 bg-[url('faq-bg.png')] bg-cover">
      <div className="container">
        <div className="flex flex-col gap-5">
          <SectionTag content="FAQ's" />
          <SectionHeading content="“Frequently Asked Questions”" />
        </div>

        <Accordion
          type="single"
          collapsible
          className="flex justify-center flex-col mt-10 gap-4 w-full max-w-4xl mx-auto px-4"
          value={openValue}
          onValueChange={(value) => setOpenValue(value)}
        >
          {faq_data.map((data, i) => {
            const itemValue = `value-${i}`;
            const isOpen = itemValue === openValue;

            return (
              <div key={data.question} className="w-full">
                <AccordionItem value={`value-${i}`} className="space-y-2">
                  <AccordionTrigger className="flex justify-between bg-brand-gray-600 p-3 rounded-md h-14 w-full">
                    <div className="[@media(max-width:425px)]:text-[12px]">
                      {data.question}
                    </div>

                    {!isOpen ? (
                      <PlusCircleIcon className="cursor-pointer size-5" />
                    ) : (
                      <MinusCircleIcon className="cursor-pointer size-5" />
                    )}
                  </AccordionTrigger>
                  <AccordionContent className="flex items-start h-auto bg-brand-gray-600 rounded-md p-3 text-gray-300 ~text-sm/base">
                    {data.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
