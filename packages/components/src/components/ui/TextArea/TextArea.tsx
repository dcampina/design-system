import * as React from "react"

import { cn } from "@/lib/utils"

function TextArea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-16 w-full min-w-0 rounded-lg border border-ds3-input bg-ds3-input px-2.5 py-1 font-ds3-body-sm text-ds3-default transition-colors outline-none placeholder:text-ds3-caption focus-visible:border-ds3-focused focus-visible:ring-3 focus-visible:ring-ds3-focused disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-ds3-disabled aria-invalid:border-ds3-danger aria-invalid:ring-3 aria-invalid:ring-ds3-danger",
        className
      )}
      {...props}
    />
  )
}

export { TextArea }
