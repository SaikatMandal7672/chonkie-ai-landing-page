"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      // Limit the movement range
      const xOffset = x * 20
      const yOffset = y * 20

      containerRef.current.style.setProperty("--x-offset", `${xOffset}px`)
      containerRef.current.style.setProperty("--y-offset", `${yOffset}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
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
          <div className="inline-block mb-4 px-3 border-2 py-1 rounded-ful rounded-full backdrop-blur-sm text-neutral-900 text-sm font-medium">
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
                AI Ready
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-lg md:text-xl text-neutral-100 rounded-lg px-2 py-1 md:px-4 md:py-2 bg-amber-500/50 max-w-2xl mx-auto"
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
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg">
                Book a Demo
              </Button>
            </Link>
            <Link href="/cloud" className="hover-target">
              <Button size="lg" className="w-full sm:w-auto text-gray-900 border border-gray-900" >
                Try Chonkie Cloud
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
}
