import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-ds2-xxl w-full rounded-ds2-l border border-ds2-input bg-ds2-input px-ds2-s py-ds2-xs text-base text-ds2-default outline-none transition-colors placeholder:text-ds2-caption focus-visible:border-ds2-focused focus-visible:ring-ds2-l focus-visible:ring-ds2-focused/50 disabled:cursor-not-allowed disabled:bg-ds2-disabled disabled:text-ds2-disabled aria-invalid:border-ds2-danger aria-invalid:ring-ds2-l aria-invalid:ring-ds2-danger/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
