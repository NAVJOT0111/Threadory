import type { ReactNode } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface AccordionItem {
  value: string;
  heading: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  /** Rule colour class, e.g. border-petal on dark surfaces. */
  ruleClassName?: string;
  headingClassName?: string;
}

export function Accordion({ items, className, ruleClassName = 'border-ink', headingClassName }: AccordionProps) {
  return (
    <RadixAccordion.Root type="single" collapsible className={className}>
      {items.map((item) => (
        <RadixAccordion.Item key={item.value} value={item.value} className={cn('border-b-structure', ruleClassName)}>
          <RadixAccordion.Header className="flex">
            <RadixAccordion.Trigger
              className={cn(
                'group flex h-14 w-full items-center justify-between text-left font-sans text-control uppercase',
                headingClassName,
              )}
            >
              {item.heading}
              <ChevronDown
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-5 transition-transform duration-150 ease-out group-data-[state=open]:rotate-180"
              />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="pb-4">{item.content}</RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
