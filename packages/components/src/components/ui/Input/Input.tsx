import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-ds3-input bg-ds3-input px-2.5 py-1 font-ds3-body-sm text-ds3-default transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-ds3-neutral file:text-ds3-default file:hover:bg-ds3-neutral-hover file:active:bg-ds3-neutral-active placeholder:text-ds3-caption focus-visible:border-ds3-focused focus-visible:ring-3 focus-visible:ring-ds3-focused disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-ds3-disabled aria-invalid:border-ds3-danger aria-invalid:ring-3 aria-invalid:ring-ds3-danger",
        className
      )}
      {...props}
    />
  )
}

export { Input }
