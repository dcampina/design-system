// InputGroup.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { Search, X } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./InputGroup"

const ADDON_ALIGNS = [
  "inline-start",
  "inline-end",
  "block-start",
  "block-end",
] as const

const BUTTON_SIZES = ["xs", "sm", "icon-xs", "icon-sm"] as const

const meta = {
  title: "ui/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  args: {
    className: "w-[360px]",
  },
  argTypes: {
    className: { control: false },
    children: { control: false },
    onClick: { control: false },
    onMouseDown: { control: false },
    onKeyDown: { control: false },
  },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon align="inline-start">
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>

      <InputGroupInput placeholder="example.com" aria-label="URL" />

      <InputGroupAddon align="inline-end">
        <InputGroupButton aria-label="Clear" size="icon-xs">
          <X />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithIconAddon: Story = {
  render: (args) => (
    <InputGroup {...args} className="w-[360px]">
      <InputGroupAddon align="inline-start" aria-hidden="true">
        <Search />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search…" aria-label="Search" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Clear search">
          <X />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const AddonAlignments: Story = {
  parameters: { controls: { exclude: ["className"] } },
  render: (args) => (
    <div className="grid gap-4">
      {ADDON_ALIGNS.map((align) => (
        <div key={align} className="grid gap-2">
          <div className="text-xs opacity-70">align: {align}</div>
          <InputGroup {...args} className="w-[420px]">
            <InputGroupAddon align={align}>
              <InputGroupText>Label</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Type…"
              aria-label={`Input (${align})`}
            />
          </InputGroup>
        </div>
      ))}
    </div>
  ),
}


export const Disabled: Story = {
  render: (args) => (
    <InputGroup {...args} className="w-[360px]">
      <InputGroupAddon align="inline-start">
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        disabled
        placeholder="Disabled"
        aria-label="Disabled input"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton disabled aria-label="Disabled action" size="xs">
          Action
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <div className="grid w-[360px] gap-2">
      <InputGroup {...args}>
        <InputGroupAddon align="inline-start">
          <InputGroupText>Email</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          aria-invalid
          placeholder="name@domain.com"
          aria-label="Email"
        />
      </InputGroup>
      <div className="text-xs text-ds3-danger">Please enter a valid email.</div>
    </div>
  ),
}

export const WithTextarea: Story = {
  render: (args) => (
    <InputGroup {...args} className="w-[520px]">
      <InputGroupAddon align="block-start" className="border-b border-border">
        <InputGroupText>Message</InputGroupText>
      </InputGroupAddon>

      <InputGroupTextarea
        rows={3}
        placeholder="Write something…"
        aria-label="Message"
      />

      <InputGroupAddon align="block-end" className="border-t border-border">
        <InputGroupButton size="xs">Send</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const Dark: Story = {
  decorators: [(Story) => <div className="dark p-4 bg-ds3-surface">{Story()}</div>],
  render: (args) => (
    <div className="grid gap-3">
      <InputGroup {...args} className="w-[420px]">
        <InputGroupAddon align="inline-start" aria-hidden="true">
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search…" aria-label="Search (dark)" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton aria-label="Clear (dark)" size="icon-xs">
            <X />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup {...args} className="w-[520px]">
        <InputGroupAddon align="block-start" className="border-b border-ds3-default">
          <InputGroupText>Message</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea
          rows={3}
          placeholder="Write something…"
          aria-label="Message (dark)"
        />
        <InputGroupAddon align="block-end" className="border-t border-ds3-default">
          <InputGroupButton size="xs">Send</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}
