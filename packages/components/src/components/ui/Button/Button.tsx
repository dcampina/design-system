import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
"group/button inline-flex shrink-0 items-center justify-center ds2-button rounded-ds2-m border border-transparent bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ds2-focused focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:bg-ds2-disabled [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",  
{
    variants: {
      variant: {
        primary: 
        "bg-ds2-brand-base text-ds2-inverted hover:bg-ds2-brand-bold active:bg-ds2-brand-bolder aria-expanded:bg-ds2-brand-bold",
        secondary:
          "bg-ds2-neutral text-ds2-default hover:bg-ds2-neutral-hover active:bg-ds2-neutral-pressed aria-expanded:bg-ds2-selected",
          tertiary:
          "bg-ds2-neutral-subtle text-ds2-default hover:bg-ds2-neutral-subtle-hover active:bg-ds2-neutral-subtle-pressed aria-expanded:bg-ds2-selected",
        destructive:
          "bg-ds2-danger-bold text-ds2-inverted hover:bg-ds2-danger-bold-hover active:bg-ds2-danger-bold-pressed aria-expanded:bg-ds2-danger-bold-hover",
        link: "text-ds2-link hover:text-ds2-link-pressed underline-offset-4 hover:underline",
      },
      size: {
        xl: "min-h-12 px-ds2-m has-data-[icon]:gap-ds2-xs",
        lg: "min-h-10 px-ds2-s has-data-[icon]:gap-ds2-xs",
        md: "min-h-8 px-ds2-s has-data-[icon]:gap-ds2-xxs",
        sm: "min-h-7 px-ds2-s has-data-[icon]:gap-ds2-xxs",
        xs: "min-h-6 px-ds2-s has-data-[icon]:gap-ds2-xxs",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
