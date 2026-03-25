import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: "Button", variant: "primary", size: "md" },
}

export const Secondary: Story = {
  args: { children: "Button", variant: "secondary", size: "md" },
}

export const Tertiary: Story = {
  args: { children: "Button", variant: "tertiary", size: "md" },
}

export const Destructive: Story = {
  args: { children: "Button", variant: "destructive", size: "md" },
}

export const Link: Story = {
  args: { children: "Button", variant: "link", size: "md" },
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
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra large</Button>
    </div>
  ),
}
