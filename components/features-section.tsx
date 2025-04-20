"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Layers,
  Clock,
  CoinsIcon as Token,
  MessageSquare,
  FileText,
  FileCode,
  LayoutPanelTop,
  Text,
  SquareLibrary,
  Braces,
  Hand,
  Dock
} from "lucide-react"
import Image from "next/image"

import { HoverEffect } from "./ui/card-hover-effect"


const features = [
  {
    icon: <Brain className="h-10 w-10 " />,
    title: "Semantic Chunker",
    description:
      "Analyzes content to identify conceptually related segments, creating chunks based on topic similarity.",
  },
  {
    icon: <Layers className="h-10 w-10 " />,
    title: "Recursive Chunker",
    description: "Breaks down documents hierarchically, preserving the nested structure of your content.",
  },
  {
    icon: <Clock className="h-10 w-10 " />,
    title: "Late Chunker",
    description: "Processes documents at query time, optimizing for specific questions and contexts.",
  },
  {
    icon: <Token className="h-10 w-10 " />,
    title: "Token Chunker",
    description: "Splits content based on token limits, ensuring optimal use of AI model context windows.",
  },
]

const useCases1 = [
  {
    icon: <MessageSquare className="md:h-6 md:w-6 h-3 w-3" />,
    title: "Chats & Conversations",
    description: "Optimized for meaning-based content grouping, regardless of document structure.",
  },
  {
    icon: <FileText className="md:h-6 md:w-6 h-3 w-3" />,
    title: "Essays & Articles",
    description: "Preserves the logical flow and argument structure of long-form content.",
  },
  {
    icon: <FileCode className="md:h-6 md:w-6 h-3 w-3" />,
    title: "Technical Documentation",
    description: "Maintains relationships between code, explanations, and implementation details.",
  },
]
const useCases2 = [
  {
    icon: <LayoutPanelTop className="md:h-6 md:w-6 h-3 w-3" />,
    title: "Structured Douments",
    description: "The Recursive Chunker preserves the document's hierarchical structure, creating chunks that respect section boundaries and their nested relationships. ",
  },
  {
    icon: <Text className="md:h-6 md:w-6 h-3 w-3" />,
    title: "PDFs",
    description: "Best for documents where structure carries semantic meaning",
  },

]
const useCases3 = [
  {
    icon: <SquareLibrary className="md:h-6 md:w-6 h-3 w-3" />,
    title: "Books and Papers",
    description: "Late chunking embeds complete documents before segmentation, preserving their full semantic context for highly accurate retrieval.   ",
  },
  {
    icon: <Dock className="md:h-6 md:w-6 h-3 w-3" />,
    title: "Contracts and Long Documents",
    description: "Capture cross-document relationships and complex topical connections that would otherwise be lost when documents are fragmented prematurely.",
  },

]
const useCases4 = [
  {
    icon: <Braces className="md:h-6 md:w-6 h-3 w-3" />,
    title: "Fixed chunks",
    description: "Quick and precise, the token chunker breaks documents into fixed size chunks.   ",
  },
  {
    icon: <Hand className="md:h-6 md:w-6 h-3 w-3" />,
    title: "Consistent Size",
    description: "Token chunking prioritizes consistent chunk sizes over semantic boundaries, making it ideal for processing large documents with strict token limitations.",
  },

]

export function FeaturesSection() {
  

  return (
    <div className=" pt-12 md:pt-20 text-neutral-900 dark:text-neutral-100 dark:bg-neutral-900 bg-neutral-100 mb-12 md:mb-24 ">
      <div className=" px-4 w-full">
        <div className="text-center w-full mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Document Processing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the right chunking strategy for your specific use case and document type
          </p>
        </div>


        <HoverEffect className="w-full min-h-5xl" items={features}></HoverEffect>


        <div
          className="my-12 relative flex flex-col gap-8 w-full bg-muted rounded-2xl px-8 py-6 md:p-12 min-h-screen bg-green-400/65 overflow-visible dark:bg-blue-950/65">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
        <div className="relative mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-card border rounded-xl overflow-hidden shadow-lg md:w-3xl mx-auto w-80"
          >
            <div className="bg-muted/50 p-4 border-b">
              <div className="h-4 w-ful bg-muted rounded">AI Chat</div>
            </div>
            <div className="p-6 space-y-4">
              <div className="dark:bg-emerald-700/50 bg-emerald-100 px-3 py-1 md:w-76 bg-muted/50 rounded-t-xl rounded-r-xl ">How big is the capital of France?</div>
              <div className="space-y-2">
                <div className="h-full ml-auto bg-neutral-400 dark:bg-neutral-700 px-2 py-2  bg-muted/50 rounded-t-xl rounded-l-xl w-2/3 md:w-1/2">The capital of France (Paris) has an area of 105 km2 (41 mi2).</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 20, y: 20 }}
            transition={{ duration: 0.5,delay:0.1}}
            className="relative min-h-40 bg-neutral-100 dark:bg-neutral-800 border mx-auto rounded-xl overflow-hidden shadow-lg md:w-xl w-2xs"
          >
            <div className="bg-muted/50 p-3 border-b">
              <div className="h-3 w-full bg-muted rounded">paris.txt chunks</div>
            </div>
            <div className="p-4 flex flex-col gap-y-2 min-h-40">
              <div className=" px-2 dark:bg-neutral-600 bg-neutral-300 bg-muted/50 rounded-lg animate-pulse">Paris is the capital and most populous city of France.</div>
              <div className="space-y-2">
                <div className="min-h-6 px-2 dark:bg-neutral-600 bg-neutral-300  rounded w-full animate-pulse">Paris covers an area of 105 km2 (41 mi2).</div>
                <div className=" px-2 bg-muted/50 rounded-lg w-full">Paris is the center of the Île-de-France region.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div >
  )
}



const Section1 = () => {
  return (
    <div className="sticky top-0 flex gap-x-12 items-center flex-col md:flex-row ">
      <div className="">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">For: Chats, Essays, Notes</h3>
        <div className="space-y-6  text-neutral-100 dark:text-neutral-900">
          {useCases1.map((useCase, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              key={index}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 md:h-12 md:w-12 h-8 w-8  rounded-full bg-background flex items-center justify-center text-neutral-300">
                {useCase.icon}
              </div>
              <div>
                <h4 className="font-medium mb-1 text-neutral-900 dark:text-neutral-300">{useCase.title}</h4>
                <p className="text-sm text-neutral-900 dark:text-neutral-300">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-4 bg-neutral-100 rounded-2xl mt-8">

        <Image
          height={480}
          width={480}
          src="/schematic-3.png"
          alt="schematic"
        />
      </motion.div>

    </div>
  )
}
export const Section2 = () => {
  return (
    <div className="flex gap-x-8 items-center flex-col md:flex-row mt-4">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">For:Structured documents,PDfs, Essays, Notes</h3>
        <div className="space-y-6 text-neutral-100 dark:text-neutral-900">
          {useCases2.map((useCase, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex gap-4 hover-target"
            >
              <div className="flex-shrink-0 md:h-12 md:w-12 h-8 w-8 rounded-full bg-background flex items-center justify-center text-neutral-300">
                {useCase.icon}
              </div>
              <div>
                <h4 className="font-medium mb-1  text-neutral-900 dark:text-neutral-300">{useCase.title}</h4>
                <p className="text-sm w-2/3 text-neutral-900 dark:text-neutral-300">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-4 bg-neutral-100 rounded-2xl mt-8">

        <Image
          height={480}
          width={480}
          src="/recursive_chunking_transparent.png"
          alt="schematic"
        />
      </motion.div>

    </div>
  )
}
const Section3 = () => {
  return (
    <div className="flex gap-x-12 items-center flex-col md:flex-row ">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">For: Books, Papers, Contracts and Long documents</h3>
        <div className="space-y-6 text-neutral-100 dark:text-neutral-900">
          {useCases3.map((useCase, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex gap-4 hover-target"
            >
              <div className="flex-shrink-0 md:h-12 md:w-12 h-8 w-8 rounded-full bg-background flex items-center justify-center text-neutral-300">
                {useCase.icon}
              </div>
              <div>
                <h4 className="font-medium mb-1 text-neutral-900 dark:text-neutral-300">{useCase.title}</h4>
                <p className="text-sm text-neutral-900 dark:text-neutral-300">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-4 bg-neutral-100 rounded-2xl mt-8">

        <Image
          height={480}
          width={480}
          src="/late_chunking.png"
          alt="schematic"
        />
      </motion.div>

    </div>
  )
}
const Section4 = () => {
  return (
    <div className="flex gap-x-12 items-center flex-col md:flex-row ">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">For: Small model applications</h3>
        <div className="space-y-6 text-neutral-100 dark:text-neutral-900">
          {useCases4.map((useCase, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView={"visible"}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex gap-4 hover-target"
            >
              <div className="flex-shrink-0 md:h-12 md:w-12 h-8 w-8 rounded-full bg-background flex items-center justify-center text-neutral-300">
                {useCase.icon}
              </div>
              <div>
                <h4 className="font-medium mb-1 text-neutral-900 dark:text-neutral-300">{useCase.title}</h4>
                <p className="text-sm text-neutral-900 dark:text-neutral-300">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-4 bg-neutral-100 rounded-2xl mt-8 ">

        <Image
          height={480}
          width={480}
          src="/token-chunker.png"
          alt="schematic"
        />
      </motion.div>

    </div>
  )
}