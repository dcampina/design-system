import type { Meta, StoryObj } from "@storybook/react"

import { Separator } from "./separator"

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-ds2-s">
      <p className="ds2-body-md">Content above</p>
      <Separator orientation="horizontal" />
      <p className="ds2-body-md">Content below</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 max-w-md items-stretch gap-ds2-s">
      <span className="ds2-body-md flex items-center">Left</span>
      <Separator orientation="vertical" />
      <span className="ds2-body-md flex items-center">Right</span>
    </div>
  ),
}

export const InToolbar: Story = {
  name: "In a row (vertical dividers)",
  render: () => (
    <div className="flex h-10 max-w-lg items-center gap-ds2-s rounded-ds2-l border border-ds2-input px-ds2-s">
      <button type="button" className="ds2-body-sm">
        Edit
      </button>
      <Separator orientation="vertical" />
      <button type="button" className="ds2-body-sm">
        Share
      </button>
      <Separator orientation="vertical" />
      <button type="button" className="ds2-body-sm">
        Delete
      </button>
    </div>
  ),
}
