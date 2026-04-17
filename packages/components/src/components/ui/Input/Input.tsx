import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-ds2-l w-full min-w-0 rounded-ds2-l border border-ds2-input bg-ds2-input px-ds2-s py-ds2-xxs text-base text-ds2-default outline-none transition-colors file:inline-flex file:h-ds2-m file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-ds2-default placeholder:text-ds2-caption focus-visible:border-ds2-focused focus-visible:ring-ds2-l focus-visible:ring-ds2-focused/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-ds2-disabled disabled:text-ds2-disabled aria-invalid:border-ds2-danger aria-invalid:ring-ds2-l aria-invalid:ring-ds2-danger/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
