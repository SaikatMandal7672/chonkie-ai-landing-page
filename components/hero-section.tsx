"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AuroraText } from "./magicui/aurora-text"

export function HeroSection() {
  return (
    <section
  
      className="relative min-h-screen flex items-center justify-center overflow-hidden top-0 left-0"
    >

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(135deg, #f79d65 0%, #e9ff70 60%)",
          backgroundSize: "200% 200%",
        }}
      ></div>

      <div className="absolute inset-0 opacity-40 animate-grid-lines">
        <svg width="100%" height="100%" className="dark:opacity-40">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="blue"
                strokeWidth="1"
                opacity="0.5"
                className="grid-line"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>


      <div className="container relative z-10 px-4 py-32 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-3 border-2 border-orange-600 py-1 rounded-ful rounded-full backdrop-blur-sm text-neutral-900 text-sm font-medium">
            AI Document Processing Made Simple
          </div>

          <div className="overflow-hidden mb-6 text-neutral-900">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight pb-1"
            >
              Make Any Document
              <br />
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-[#ae3373] to-orange-600 text-shadow">
                <AuroraText>AI Ready</AuroraText>  
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-lg md:text-xl text-black rounded-lg px-2 py-1 md:px-4 md:py-2 bg-amber-800/20 max-w-2xl mx-auto text-shadow-sm"
          >
            Chonkie parses your documents into high quality AI ingestible chunks, optimizing them for semantic
            understanding and context preservation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/demo" className="hover-target">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg bg-orange-600">
                Book a Demo
              </Button>
            </Link>
            <Link href="/cloud" className="group/button hover-target">
              <Button size="lg" className="w-full sm:w-auto text-gray-900 border border-gray-900 group-hover/button:bg-amber-100 group-hover/button:text-gray-900">
                Try Chonkie Cloud
                <span className="ml-2 group-hover/button:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
}
