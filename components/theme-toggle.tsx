"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex justify-center items-center text-white ">
          <Button variant="outline" size="sm" className="bg-neutral-700 border-neutral-900">
            <div role="button"
              onClick={()=>setTheme("dark")}
            >
              <Sun className="h-6 w-6  dark:-rotate-90 dark:hidden block" />
            </div>
            <div role="button"
              onClick={()=>setTheme("light")}
            >
              <Moon className="h-6  w-6 dark:rotate-0 dark:block hidden" />
            </div>

          </Button>
      
    </div>
  )
}
