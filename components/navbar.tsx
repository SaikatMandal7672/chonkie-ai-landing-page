"use client"

import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./theme-toggle"

export function Navbar() {


  return (
    <div
      className="fixed top-0  px-2 py-1 md:px-4 md:py-4 w-full text-[#896b57] z-50 transition-all duration-300  bg-[#E7E7E6]/80 dark:bg-neutral-600/70 dark:text-[#cea081] backdrop-blur-xl shadow-sm flex justify-between"

    >
      <Link href="/" className="flex items-center space-x-2 hover-target">
          <Image
            src="/chonkie-logo.png"
            alt="Chonkie Logo"
            width={80 * 2}
            height={80 * 2}
            className="rounded-full"
          />

        </Link>
      <div className=" flex items-center justify-between">
            
        <div className="  md:ml-auto  md:justify-end flex items-center gap-x-2  ">
          <Link href="/documentation" className="text-sm font-medium hover-target hidden md:block">
            Documentation
          </Link>
          <Link href="https://github.com/chonkie" className="hover-target md:flex hidden ">
            <Github className="h-5 w-5 mr-1" />
            <span>GitHub</span>
          </Link>
         <ModeToggle />
          
          <Link href="/demo" className="hidden sm:block hover-target">
            <Button className="border border-orange-600 bg-[#f35b04] text-white " size="sm">
              Book a Demo
            </Button>
          </Link>
          <Link href="/cloud" className="hover-target">
            <Button size="sm">
              Chonkie Cloud
              <span className="ml-1">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
