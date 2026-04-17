import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "@/components/ui/Input/Input"
import { Label } from "./label"

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

type PlaygroundArgs = {
  text: string
}

export const Playground: StoryObj<PlaygroundArgs> = {
  parameters: {
    controls: { include: ["text"] },
  },
  args: {
    text: "Field label",
  },
  argTypes: {
    text: { control: "text" },
  },
  render: ({ text }) => (
    <div className="flex max-w-sm flex-col gap-ds2-xs">
      <Label htmlFor="label-playground-input">{text}</Label>
      <Input id="label-playground-input" placeholder="Associated input" />
    </div>
  ),
}

export const WithInput: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-ds2-xs">
      <Label htmlFor="story-label-email">Email</Label>
      <Input id="story-label-email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const WithDisabledInput: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-ds2-xs">
      <Label htmlFor="story-label-disabled">Username</Label>
      <Input id="story-label-disabled" disabled placeholder="Cannot edit" />
    </div>
  ),
}
