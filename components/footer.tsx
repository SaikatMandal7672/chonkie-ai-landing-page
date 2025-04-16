import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted-foreground text-neutral-800 dark:text-neutral-100 border-t py-12 px-8">
      <div className=" px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 hover-target">
              <span className="font-bold text-xl">chonkie</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md hidden md:block">
              Chonkie parses your documents into high quality AI ingestible chunks, optimizing them for semantic
              understanding and context preservation.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://github.com/chonkie"
                className="text-muted-foreground hover:text-foreground hover-target"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground hover-target">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground hover-target">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-muted-foreground hover:text-foreground hover-target">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-muted-foreground hover:text-foreground hover-target">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground hover-target">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground hover-target">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground hover-target">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground hover-target">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Chonkie. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground hover-target">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground hover-target">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
