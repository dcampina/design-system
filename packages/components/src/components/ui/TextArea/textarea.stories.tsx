import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "./textarea"

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

type PlaygroundArgs = {
  placeholder: string
  rows: number
  disabled: boolean
  invalid: boolean
}

export const Playground: StoryObj<PlaygroundArgs> = {
  parameters: {
    controls: {
      include: ["placeholder", "rows", "disabled", "invalid"],
    },
  },
  args: {
    placeholder: "Write something…",
    rows: 4,
    disabled: false,
    invalid: false,
  },
  argTypes: {
    rows: { control: { type: "number", min: 2, max: 20 } },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
  render: ({ placeholder, rows, disabled, invalid }) => (
    <Textarea
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      aria-invalid={invalid || undefined}
    />
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-ds2-m">
      <div className="flex flex-col gap-ds2-xs">
        <p className="ds2-body-md text-ds2-subtle">Default</p>
        <Textarea placeholder="Message" rows={3} />
      </div>
      <div className="flex flex-col gap-ds2-xs">
        <p className="ds2-body-md text-ds2-subtle">Disabled</p>
        <Textarea placeholder="Disabled" rows={3} disabled />
      </div>
      <div className="flex flex-col gap-ds2-xs">
        <p className="ds2-body-md text-ds2-subtle">Invalid</p>
        <Textarea
          rows={3}
          aria-invalid
          defaultValue="This field has an error."
        />
      </div>
    </div>
  ),
}
