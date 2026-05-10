import type { Meta, StoryObj } from "@storybook/react"

import { TextArea } from "./TextArea"

const meta = {
  title: "ui/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: {
    placeholder: "Write something…",
    defaultValue: "",
    disabled: false,
    rows: 4,
  },
  argTypes: {
    className: { control: false },
    onChange: { control: false },
    onInput: { control: false },
    onBlur: { control: false },
    onFocus: { control: false },
    value: { control: false }, // keep uncontrolled by default in SB
  },
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="w-[420px]">
      <TextArea {...args} aria-label="Textarea" />
    </div>
  ),
}

export const WithValue: Story = {
  args: {
    defaultValue:
      "This is some pre-filled content.\n\n- It supports multiple lines\n- and keeps your styling consistent.",
  },
  render: (args) => (
    <div className="w-[420px]">
      <TextArea {...args} aria-label="Textarea with value" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
  render: (args) => (
    <div className="w-[420px]">
      <TextArea {...args} aria-label="Disabled textarea" />
    </div>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <div className="grid w-[420px] gap-2">
      <TextArea {...args} aria-invalid placeholder="aria-invalid=true" aria-label="Invalid textarea" />
      <div className="text-xs text-ds3-danger">Please enter a valid message.</div>
    </div>
  ),
}

export const Rows: Story = {
  render: (args) => (
    <div className="grid w-[520px] gap-4">
      <div className="grid gap-2">
        <div className="text-xs opacity-70">rows: 2</div>
        <TextArea {...args} rows={2} aria-label="Textarea rows 2" placeholder="Short…" />
      </div>

      <div className="grid gap-2">
        <div className="text-xs opacity-70">rows: 4</div>
        <TextArea {...args} rows={4} aria-label="Textarea rows 4" placeholder="Default…" />
      </div>

      <div className="grid gap-2">
        <div className="text-xs opacity-70">rows: 8</div>
        <TextArea {...args} rows={8} aria-label="Textarea rows 8" placeholder="Long…" />
      </div>
    </div>
  ),
}

export const Dark: Story = {
  decorators: [(Story) => <div className="dark p-4">{Story()}</div>],
  render: (args) => (
    <div className="w-[420px]">
      <TextArea {...args} aria-label="Textarea (dark)" placeholder="Dark mode…" />
    </div>
  ),
}
