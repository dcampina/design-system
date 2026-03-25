import type { Meta, StoryObj } from "@storybook/react"
import { ChevronRight, PlusIcon } from "lucide-react"

import { Button } from "./Button"

const TEXT_SIZES = ["xs", "sm", "md", "lg", "xl"] as const
const ICON_SIZES = ["icon-xs", "icon-sm", "icon-md", "icon-lg", "icon-xl"] as const
const VARIANTS = ["primary", "secondary", "tertiary", "destructive", "link"] as const
const NON_LINK_VARIANTS = ["primary", "secondary", "tertiary", "destructive"] as const

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

type TextPlaygroundArgs = {
  variant: (typeof VARIANTS)[number]
  size: (typeof TEXT_SIZES)[number]
  label: string
  disabled: boolean
}

export const TextPlayground: StoryObj<TextPlaygroundArgs> = {
  name: "Playground / Text button",
  parameters: {
    controls: {
      include: ["variant", "size", "label", "disabled"],
    },
  },
  args: {
    variant: "primary",
    size: "md",
    label: "Button",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS,
    },
    size: {
      control: "select",
      options: TEXT_SIZES,
    },
    label: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  render: ({ variant, size, label, disabled }) => (
    <Button variant={variant} size={size} disabled={disabled}>
      {label}
    </Button>
  ),
}

type IconOnlyPlaygroundArgs = {
  variant: (typeof NON_LINK_VARIANTS)[number]
  size: (typeof ICON_SIZES)[number]
  ariaLabel: string
  disabled: boolean
}

export const IconOnlyPlayground: StoryObj<IconOnlyPlaygroundArgs> = {
  name: "Playground / Icon-only button",
  parameters: {
    controls: {
      include: ["variant", "size", "ariaLabel", "disabled"],
    },
  },
  args: {
    variant: "primary",
    size: "icon-md",
    ariaLabel: "Add",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: NON_LINK_VARIANTS,
    },
    size: {
      control: "select",
      options: ICON_SIZES,
    },
    ariaLabel: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  render: ({ variant, size, ariaLabel, disabled }) => (
    <Button variant={variant} size={size} aria-label={ariaLabel} disabled={disabled}>
      <PlusIcon aria-hidden />
    </Button>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">Text only</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">With leading icon</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">
            <PlusIcon data-icon aria-hidden />
            Add
          </Button>
          <Button size="sm">
            <PlusIcon data-icon aria-hidden />
            Add
          </Button>
          <Button size="md">
            <PlusIcon data-icon aria-hidden />
            Add
          </Button>
          <Button size="lg">
            <PlusIcon data-icon aria-hidden />
            Add
          </Button>
          <Button size="xl">
            <PlusIcon data-icon aria-hidden />
            Add
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">With trailing icon</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">
            Next
            <ChevronRight data-icon aria-hidden />
          </Button>
          <Button size="sm">
            Next
            <ChevronRight data-icon aria-hidden />
          </Button>
          <Button size="md">
            Next
            <ChevronRight data-icon aria-hidden />
          </Button>
          <Button size="lg">
            Next
            <ChevronRight data-icon aria-hidden />
          </Button>
          <Button size="xl">
            Next
            <ChevronRight data-icon aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  ),
}

export const LeadingAndTrailingIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">Leading icon</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">
            <PlusIcon data-icon aria-hidden />
            Create
          </Button>
          <Button variant="secondary">
            <PlusIcon data-icon aria-hidden />
            Create
          </Button>
          <Button variant="tertiary">
            <PlusIcon data-icon aria-hidden />
            Create
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">Trailing icon</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">
            Continue
            <ChevronRight data-icon aria-hidden />
          </Button>
          <Button variant="secondary">
            Continue
            <ChevronRight data-icon aria-hidden />
          </Button>
          <Button variant="tertiary">
            Continue
            <ChevronRight data-icon aria-hidden />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">Leading and trailing</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">
            <PlusIcon data-icon aria-hidden />
            Save and continue
            <ChevronRight data-icon aria-hidden />
          </Button>
          <Button variant="secondary">
            <PlusIcon data-icon aria-hidden />
            Save and continue
            <ChevronRight data-icon aria-hidden />
          </Button>
          <Button variant="tertiary">
            <PlusIcon data-icon aria-hidden />
            Save and continue
            <ChevronRight data-icon aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  ),
}

export const AllIconSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-8">
      <figure className="flex flex-col items-center gap-2">
        <Button size="icon-xs" aria-label="Add (icon-xs)">
          <PlusIcon aria-hidden />
        </Button>
        <figcaption className="ds2-body-md text-ds2-subtle text-center">
          icon-xs
          <br />
          24×24 · 16px icon
        </figcaption>
      </figure>

      <figure className="flex flex-col items-center gap-2">
        <Button size="icon-sm" aria-label="Add (icon-sm)">
          <PlusIcon aria-hidden />
        </Button>
        <figcaption className="ds2-body-md text-ds2-subtle text-center">
          icon-sm
          <br />
          28×28 · 16px icon
        </figcaption>
      </figure>

      <figure className="flex flex-col items-center gap-2">
        <Button size="icon-md" aria-label="Add (icon-md)">
          <PlusIcon aria-hidden />
        </Button>
        <figcaption className="ds2-body-md text-ds2-subtle text-center">
          icon-md
          <br />
          32×32 · 16px icon
        </figcaption>
      </figure>

      <figure className="flex flex-col items-center gap-2">
        <Button size="icon-lg" aria-label="Add (icon-lg)">
          <PlusIcon aria-hidden />
        </Button>
        <figcaption className="ds2-body-md text-ds2-subtle text-center">
          icon-lg
          <br />
          40×40 · 20px icon
        </figcaption>
      </figure>

      <figure className="flex flex-col items-center gap-2">
        <Button size="icon-xl" aria-label="Add (icon-xl)">
          <PlusIcon aria-hidden />
        </Button>
        <figcaption className="ds2-body-md text-ds2-subtle text-center">
          icon-xl
          <br />
          48×48 · 24px icon
        </figcaption>
      </figure>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">Primary</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" aria-expanded>
            Expanded
          </Button>
          <Button variant="primary" aria-haspopup="menu" aria-expanded>
            Menu open
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">Secondary</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="secondary" aria-expanded>
            Expanded
          </Button>
          <Button variant="secondary" aria-haspopup="menu" aria-expanded>
            Menu open
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">Tertiary</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="tertiary">Default</Button>
          <Button variant="tertiary" disabled>
            Disabled
          </Button>
          <Button variant="tertiary" aria-expanded>
            Expanded
          </Button>
          <Button variant="tertiary" aria-haspopup="menu" aria-expanded>
            Menu open
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">Destructive</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="destructive">Default</Button>
          <Button variant="destructive" disabled>
            Disabled
          </Button>
          <Button variant="destructive" aria-expanded>
            Expanded
          </Button>
          <Button variant="destructive" aria-haspopup="menu" aria-expanded>
            Menu open
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="ds2-body-md text-ds2-subtle">Link</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="link">Default</Button>
          <Button variant="link" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
}
