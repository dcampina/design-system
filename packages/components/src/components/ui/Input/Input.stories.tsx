
// Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./index.js"

const meta = {
  title: "ui/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    type: "text",
    placeholder: "Type something…",
    defaultValue: "",
    disabled: false,
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "text",
        "email",
        "password",
        "search",
        "tel",
        "url",
        "number",
        "file",
      ],
    },
    className: { control: false },
    onChange: { control: false },
    onInput: { control: false },
    onBlur: { control: false },
    onFocus: { control: false },
    value: { control: false }, // prefer uncontrolled in SB by default
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <Input {...args} />
    </div>
  ),
}

export const Types: Story = {
  parameters: { controls: { exclude: ["type", "defaultValue", "value"] } },
  render: (args) => (
    <div className="grid w-[520px] gap-3 sm:grid-cols-2">
      <div className="grid gap-1.5">
        <div className="text-xs opacity-70">text</div>
        <Input {...args} type="text" placeholder="Text" />
      </div>

      <div className="grid gap-1.5">
        <div className="text-xs opacity-70">email</div>
        <Input {...args} type="email" placeholder="name@dpa.de" />
      </div>

      <div className="grid gap-1.5">
        <div className="text-xs opacity-70">password</div>
        <Input {...args} type="password" placeholder="••••••••" />
      </div>

      <div className="grid gap-1.5">
        <div className="text-xs opacity-70">search</div>
        <Input {...args} type="search" placeholder="Search…" />
      </div>

      <div className="grid gap-1.5">
        <div className="text-xs opacity-70">number</div>
        <Input {...args} type="number" placeholder="42" />
      </div>

      <div className="grid gap-1.5">
        <div className="text-xs opacity-70">file</div>
        <Input {...args} type="file" />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <Input {...args} disabled placeholder="Disabled" />
    </div>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <div className="grid w-[320px] gap-2">
      <Input {...args} aria-invalid placeholder="aria-invalid=true" />
      <div className="text-xs text-ds3-danger">This field is required.</div>
    </div>
  ),
}

export const Dark: Story = {
  decorators: [(Story) => <div className="dark p-12 bg-ds3-surface">{Story()}</div>],
  render: (args) => (
    <div className="w-[320px]">
      <Input {...args} placeholder="Dark mode" />
    </div>
  ),
}
