"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="py-16 px-8 md:px-16  md:py-24 bg-[#d9dee0] dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 w-full">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
 
        <div ref={ref} className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Make Your Documents AI-Ready?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Join thousands of developers and companies using Chonkie to optimize their documents for AI processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/demo" className="hover-target">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-zinc-200 dark:bg-zinc-800">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/cloud" className="hover-target">
                <Button size="lg" className="w-full sm:w-auto border border-neutral-700">
                  Try Chonkie Cloud <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
            <p className="mt-12 text-base sm:text-lg md:text-xl">
              Not sure what you need? Check out our{" "}
              <a
                href="https://github.com/chonkie-inc/chonkie/tree/main/cookbook"
                className="underline decoration-wavy"
              >
                chonkbook
              </a>{" "}
              for examples, or contact us for a custom solution.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <a href="https://github.com/chonkie-inc/chonkie/tree/main/cookbook">
            <Image
              width={520}
              height={520}
              alt="chonkbook"
              src="/chonkbook-banner.png"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
