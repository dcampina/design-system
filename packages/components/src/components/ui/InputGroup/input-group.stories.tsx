import type { Meta, StoryObj } from "@storybook/react"
import { SearchIcon, SendIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group"

const ADDON_ALIGNS = [
  "inline-start",
  "inline-end",
  "block-start",
  "block-end",
] as const

const meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof meta>

type PlaygroundArgs = {
  addonAlign: (typeof ADDON_ALIGNS)[number]
  addonText: string
  placeholder: string
  disabled: boolean
}

export const Playground: StoryObj<PlaygroundArgs> = {
  parameters: {
    controls: {
      include: ["addonAlign", "addonText", "placeholder", "disabled"],
    },
  },
  args: {
    addonAlign: "inline-start",
    addonText: "https://",
    placeholder: "example.com",
    disabled: false,
  },
  argTypes: {
    addonAlign: { control: "select", options: ADDON_ALIGNS },
    addonText: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  render: ({ addonAlign, addonText, placeholder, disabled }) => (
    <InputGroup className="max-w-md" data-disabled={disabled || undefined}>
      <InputGroupAddon align={addonAlign}>
        <InputGroupText>{addonText}</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder={placeholder} disabled={disabled} />
    </InputGroup>
  ),
}

export const AddonAlignments: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-ds2-l">
      <div className="flex flex-col gap-ds2-xs">
        <span className="ds2-caption-md text-ds2-subtle">Inline start</span>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <SearchIcon aria-hidden />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search…" />
        </InputGroup>
      </div>
      <div className="flex flex-col gap-ds2-xs">
        <span className="ds2-caption-md text-ds2-subtle">Inline end</span>
        <InputGroup>
          <InputGroupInput placeholder="Message" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton aria-label="Send" size="icon-xs">
              <SendIcon aria-hidden />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex flex-col gap-ds2-xs">
        <span className="ds2-caption-md text-ds2-subtle">Block start</span>
        <InputGroup>
          <InputGroupAddon align="block-start">
            <InputGroupText>Label</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Value" />
        </InputGroup>
      </div>
      <div className="flex flex-col gap-ds2-xs">
        <span className="ds2-caption-md text-ds2-subtle">Block end</span>
        <InputGroup>
          <InputGroupInput placeholder="Value" />
          <InputGroupAddon align="block-end">
            <InputGroupText>Helper</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  ),
}

export const InputGroupButtonSizes: Story = {
  render: () => (
    <div className="flex max-w-lg flex-col gap-ds2-m">
      <InputGroup>
        <InputGroupInput placeholder="Extra small button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="xs">Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Icon XS" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Submit">
            <SendIcon aria-hidden />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Icon SM" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-sm" aria-label="Submit">
            <SendIcon aria-hidden />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="max-w-md">
      <InputGroupAddon align="block-start">
        <InputGroupText>Comment</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea
        placeholder="Write something…"
        rows={4}
        aria-label="Comment"
      />
    </InputGroup>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-ds2-m">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Default" />
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Disabled group" disabled />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Invalid" aria-invalid />
      </InputGroup>
    </div>
  ),
}
