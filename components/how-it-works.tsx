"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"


const steps = [
  {
    number: "01",
    title: "Upload Your Document",
    description: "Upload any document format including PDF, DOCX, TXT, or even web pages.",
  },
  {
    number: "02",
    title: "Select Chunking Strategy",
    description: "Choose the optimal chunking strategy based on your document type and use case.",
  },
  {
    number: "03",
    title: "Process & Optimize",
    description: "Our AI analyzes your document and creates optimized chunks for AI ingestion.",
  },
  {
    number: "04",
    title: "Integrate & Use",
    description: "Use the processed chunks with your favorite AI models and applications.",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div id="how-it-works" className="py-24 w-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Chonkie Works</h2>
          <p className=" text-lg">
            A simple four-step process to transform your documents into AI-ready chunks
          </p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-px bg-border"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative grid md:grid-cols-2 gap-8 mb-12 md:mb-24 hover-target"
            >
              <div className={`md:text-right text-center ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="text-4xl font-bold text-muted-foreground/30 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              <div className={`flex justify-center items-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className=" w-full">

                  <div className="py-4 bg-green-300/50 h-50 px-6 bg-card border rounded-xl  w-full flex justify-center items-center">
                    <div className=" w-14 h-14 rounded-full bg-muted-foreground border-4 border-primary flex items-center justify-center z-10 ">
                      {index < steps.length - 1 ? (
                        <ArrowRight className="h-6 w-6" />
                      ) : (
                        <div className="h-6 w-6 bg-primary rounded-full">
                          <ArrowRight className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                    <div className="h-32 bg-muted/50 rounded-lg animate-pulse">
                     
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
