"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  question: string
  answer: string
}

export function CustomAccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border/40">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-orbitron"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <div className="pb-4 text-muted-foreground">{answer}</div>}
    </div>
  )
}

interface CustomAccordionProps {
  items: Array<{
    question: string
    answer: string
  }>
}

export function CustomAccordion({ items }: CustomAccordionProps) {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <CustomAccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

