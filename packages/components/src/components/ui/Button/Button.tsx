import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center active:translate-y-px rounded-lg border border-transparent bg-clip-padding text-ds3-subtle font-ds3-button whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ds3-focused active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:bg-ds3-disabled disabled:text-ds3-disabled disabled:border-ds3-disabled aria-invalid:border-ds3-danger aria-invalid:ring-3 aria-invalid:ring-ds3-danger dark:aria-invalid:border-ds3-danger dark:aria-invalid:ring-ds3-danger [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-ds3-brand-base text-ds3-inverted hover:bg-ds3-brand-bold active:bg-ds3-brand-bolder [a]:hover:bg-ds3-brand-bolder",
        outline:
          "border-border border-ds3-default bg-ds3-neutral-subtle hover:bg-ds3-neutral-subtle-hover active:bg-ds3-neutral-subtle-active text-ds3-default aria-expanded:bg-ds3-selected aria-expanded:text-ds3-selected",
        secondary:
          "bg-ds3-neutral text-ds3-default hover:bg-ds3-neutral-hover active:bg-ds3-neutral-active aria-expanded:bg-ds3-neutral-active aria-expanded:text-ds3-default",
        ghost:
          "hover:bg-ds3-neutral-subtle-hover active:bg-ds3-neutral-subtle-active aria-expanded:bg-ds3-neutral-subtle-active aria-expanded:text-ds3-subtle",
        destructive:
          "bg-ds3-danger-bold text-ds3-inverted hover:bg-ds3-danger-bold-hover active:bg-ds3-danger-bold-active focus-visible:border-ds3-danger focus-visible:ring-ds3-danger",
        link: "text-ds3-link underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-lg px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-xl px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-lg in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-lg in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
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
