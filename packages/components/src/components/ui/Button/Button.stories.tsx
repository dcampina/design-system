// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { PlusIcon } from "lucide-react"

import { Button } from "./Button"

const VARIANTS = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const

const SIZES = [
  "default",
  "xs",
  "sm",
  "lg",
  "icon",
  "icon-xs",
  "icon-sm",
  "icon-lg",
] as const

const ICON_SIZES = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const

const meta = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
  argTypes: {
    variant: { control: { type: "select" }, options: VARIANTS },
    size: { control: { type: "select" }, options: SIZES },
    className: { control: false },
    onClick: { control: false },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  parameters: { controls: { exclude: ["variant"] } },
  render: (args) => (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-items-start">
      {VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
}

export const DarkVariants: Story = {
  decorators: [(Story) => <div className="dark p-4 bg-ds3-surface">{Story()}</div>],
  parameters: { controls: { exclude: ["variant"] } },
  render: (args) => (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 justify-items-start">
      {VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const LinkVariant: Story = {
  args: {
    variant: "link",
    children: "Learn more",
  },
}

export const IconButtons: Story = {
  args: {
    children: <PlusIcon />,
  },
  parameters: { controls: { exclude: ["variant", "size", "children"] } },
  render: (args) => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-ds3-subtle">Icon sizes (default variant)</p>
        <div className="flex flex-wrap items-center gap-3">
          {ICON_SIZES.map((size) => (
            <Button
              key={size}
              {...args}
              size={size}
              aria-label={`Add — ${size}`}
            >
              {args.children}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-ds3-subtle">Variants (icon size)</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {VARIANTS.map((variant) => (
            <div
              key={variant}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              <Button
                {...args}
                variant={variant}
                size="icon"
                aria-label={`Add — ${variant}`}
              >
                {args.children}
              </Button>
              <span className="text-xs text-ds3-subtle capitalize">{variant}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}
