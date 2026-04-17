import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select"

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
] as const

type PlaygroundArgs = {
  size: "sm" | "default"
  disabled: boolean
  invalid: boolean
  placeholder: string
}

export const Playground: StoryObj<PlaygroundArgs> = {
  parameters: {
    controls: {
      include: ["size", "disabled", "invalid", "placeholder"],
    },
  },
  args: {
    size: "default",
    disabled: false,
    invalid: false,
    placeholder: "Choose a fruit…",
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "default"] },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
    placeholder: { control: "text" },
  },
  render: ({ size, disabled, invalid, placeholder }) => {
    const [value, setValue] = React.useState<string | null>(null)

    return (
      <Select
        value={value}
        onValueChange={(v) => setValue(v)}
        disabled={disabled}
      >
        <SelectTrigger
          size={size}
          aria-invalid={invalid || undefined}
          className="min-w-48"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  },
}

export const TriggerSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-ds2-m">
      <div className="flex flex-col gap-ds2-xs">
        <span className="ds2-caption-md text-ds2-subtle">Small</span>
        <Select defaultValue="apple">
          <SelectTrigger size="sm" className="min-w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-ds2-xs">
        <span className="ds2-caption-md text-ds2-subtle">Default</span>
        <Select defaultValue="banana">
          <SelectTrigger size="default" className="min-w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const WithGroupsAndSeparator: Story = {
  render: () => (
    <Select defaultValue="de">
      <SelectTrigger className="min-w-56">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Western Europe</SelectLabel>
          <SelectItem value="de">Germany</SelectItem>
          <SelectItem value="fr">France</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Northern Europe</SelectLabel>
          <SelectItem value="se">Sweden</SelectItem>
          <SelectItem value="no">Norway</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-ds2-l">
      <div className="flex flex-col gap-ds2-xs">
        <span className="ds2-body-md text-ds2-subtle">Disabled</span>
        <Select defaultValue="apple" disabled>
          <SelectTrigger className="min-w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-ds2-xs">
        <span className="ds2-body-md text-ds2-subtle">Invalid</span>
        <Select>
          <SelectTrigger className="min-w-40" aria-invalid>
            <SelectValue placeholder="Required" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const DisabledItem: Story = {
  render: () => (
    <Select defaultValue="a">
      <SelectTrigger className="min-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Available</SelectItem>
        <SelectItem value="b" disabled>
          Unavailable
        </SelectItem>
        <SelectItem value="c">Another</SelectItem>
      </SelectContent>
    </Select>
  ),
}
