import type { Meta, StoryObj } from "@storybook/react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "./Avatar"
import type { AvatarStatus } from "./Avatar"

const SIZES = ["xs", "sm", "md", "lg", "xl"] as const
const SHAPES = ["circle", "square"] as const
const STATUSES = ["online", "away", "offline"] as const

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

// ─── Playgrounds ─────────────────────────────────────────────────────────────

type PlaygroundArgs = {
  size: (typeof SIZES)[number]
  shape: (typeof SHAPES)[number]
  src: string
  initials: string
  status?: AvatarStatus
}

export const Playground: StoryObj<PlaygroundArgs> = {
  name: "Playground / Avatar",
  parameters: {
    controls: {
      include: ["size", "shape", "src", "initials", "status"],
    },
  },
  args: {
    size: "md",
    shape: "circle",
    src: "https://api.dicebear.com/9.x/avataaars/svg?seed=Storybook",
    initials: "DC",
    status: undefined,
  },
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
    },
    shape: {
      control: "inline-radio",
      options: SHAPES,
    },
    src: {
      control: "text",
      description: "Image URL. Clear to show the initials fallback.",
    },
    initials: {
      control: "text",
      description: "Shown when no image is available. At xs only the first character renders.",
    },
    status: {
      control: "select",
      options: [undefined, ...STATUSES],
      description: "Presence status. Leave unset to render without a badge.",
    },
  },
  render: ({ size, shape, src, initials, status }) => (
    <Avatar size={size} shape={shape}>
      {src ? <AvatarImage src={src} alt="" /> : null}
      <AvatarFallback>{initials}</AvatarFallback>
      <AvatarBadge status={status} />
    </Avatar>
  ),
}

const GROUP_SEEDS = ["A", "B", "C", "D", "E", "F", "G", "H"] as const

type GroupPlaygroundArgs = {
  size: (typeof SIZES)[number]
  shape: (typeof SHAPES)[number]
  groupChildCount: number
  counterValue: number
  status?: AvatarStatus
}

export const GroupPlayground: StoryObj<GroupPlaygroundArgs> = {
  name: "Playground / Avatar group",
  parameters: {
    controls: {
      include: ["size", "shape", "groupChildCount", "counterValue", "status"],
    },
  },
  args: {
    size: "md",
    shape: "circle",
    groupChildCount: 3,
    counterValue: 12,
    status: undefined,
  },
  argTypes: {
    size: {
      control: "select",
      options: SIZES,
    },
    shape: {
      control: "inline-radio",
      options: SHAPES,
    },
    groupChildCount: {
      control: { type: "range", min: 3, max: 8, step: 1 },
      description: "Number of avatars shown before the +N chip.",
    },
    counterValue: {
      control: { type: "range", min: 1, max: 99, step: 1 },
      description: "Value shown in the overflow chip (e.g. +12).",
    },
    status: {
      control: "select",
      options: [undefined, ...STATUSES],
      description:
        "Presence on each visible avatar. Leave unset for no badges.",
    },
  },
  render: ({ size, shape, groupChildCount, counterValue, status }) => (
    <AvatarGroup size={size} shape={shape}>
      {GROUP_SEEDS.slice(0, groupChildCount).map((seed) => (
        <Avatar key={seed} size={size} shape={shape}>
          <AvatarImage
            src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}`}
            alt=""
          />
          <AvatarFallback>{seed}</AvatarFallback>
          <AvatarBadge status={status} />
        </Avatar>
      ))}
      <AvatarGroupCount>+{counterValue}</AvatarGroupCount>
    </AvatarGroup>
  ),
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const AllSizes: Story = {
  name: "All sizes",
  render: () => (
    <div className="flex flex-col gap-ds2-m">
      <div className="flex flex-col gap-ds2-xs">
        <p className="ds2-body-md text-ds2-subtle">Circle</p>
        <div className="flex flex-wrap items-end gap-ds2-s">
          {SIZES.map((size) => (
            <figure key={size} className="flex flex-col items-center gap-2">
              <Avatar size={size} shape="circle">
                <AvatarFallback>{size === "xs" ? "D" : "DC"}</AvatarFallback>
              </Avatar>
              <figcaption className="ds2-caption-md text-ds2-caption text-center">
                {size}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-ds2-xs">
        <p className="ds2-body-md text-ds2-subtle">Square</p>
        <div className="flex flex-wrap items-end gap-ds2-s">
          {SIZES.map((size) => (
            <figure key={size} className="flex flex-col items-center gap-2">
              <Avatar size={size} shape="square">
                <AvatarFallback>{size === "xs" ? "D" : "DC"}</AvatarFallback>
              </Avatar>
              <figcaption className="ds2-caption-md text-ds2-caption text-center">
                {size}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const Shapes: Story = {
  name: "Circle vs square",
  render: () => (
    <div className="flex flex-wrap items-end gap-ds2-m">
      {SHAPES.map((shape) => (
        <figure key={shape} className="flex flex-col items-center gap-2">
          <Avatar size="lg" shape={shape}>
            <AvatarFallback>DC</AvatarFallback>
          </Avatar>
          <figcaption className="ds2-caption-md text-ds2-caption">{shape}</figcaption>
        </figure>
      ))}
    </div>
  ),
}

export const WithImage: Story = {
  name: "With image",
  render: () => (
    <div className="flex flex-col gap-ds2-m">
      <div className="flex flex-col gap-ds2-xs">
        <p className="ds2-body-md text-ds2-subtle">Circle</p>
        <div className="flex flex-wrap items-end gap-ds2-s">
          {SIZES.map((size) => (
            <Avatar key={size} size={size} shape="circle">
              <AvatarImage
                src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${size}`}
                alt=""
              />
              <AvatarFallback>{size === "xs" ? "D" : "DC"}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-ds2-xs">
        <p className="ds2-body-md text-ds2-subtle">Square</p>
        <div className="flex flex-wrap items-end gap-ds2-s">
          {SIZES.map((size) => (
            <Avatar key={size} size={size} shape="square">
              <AvatarImage
                src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${size}sq`}
                alt=""
              />
              <AvatarFallback>{size === "xs" ? "D" : "DC"}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-ds2-xs">
        <p className="ds2-body-md text-ds2-subtle">Fallback — broken src</p>
        <div className="flex flex-wrap items-end gap-ds2-s">
          {SIZES.map((size) => (
            <Avatar key={size} size={size} shape="circle">
              <AvatarImage src="/broken.png" alt="" />
              <AvatarFallback>{size === "xs" ? "D" : "DC"}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const WithBadge: Story = {
  name: "With badge",
  render: () => (
    <div className="flex flex-col gap-ds2-m">
      {(["online", "away", "offline"] as const).map((status) => (
        <div key={status} className="flex flex-col gap-ds2-xs">
          <p className="ds2-body-md text-ds2-subtle capitalize">{status}</p>
          <div className="flex flex-wrap items-end gap-ds2-s">
            {SIZES.map((size) => (
              <Avatar key={size} size={size} shape="circle">
                <AvatarFallback>{size === "xs" ? "D" : "DC"}</AvatarFallback>
                <AvatarBadge status={status} />
              </Avatar>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

export const Group: Story = {
  name: "Avatar group",
  render: () => (
    <div className="flex flex-col gap-ds2-m">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-ds2-xs">
          <p className="ds2-body-md text-ds2-subtle">{size}</p>
          <AvatarGroup size={size} shape="circle">
            {(["A", "B", "C"] as const).map((seed) => (
              <Avatar key={seed} size={size} shape="circle">
                <AvatarImage
                  src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}`}
                  alt=""
                />
                <AvatarFallback>{seed}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+N</AvatarGroupCount>
          </AvatarGroup>
        </div>
      ))}
    </div>
  ),
}

export const OnDifferentSurfaces: Story = {
  name: "Ring / On different surfaces",
  render: () => (
    <div className="flex flex-col gap-ds2-m">
      <div className="flex flex-col gap-ds2-xs">
        <p className="ds2-body-md text-ds2-subtle">
          Default — <code>--ds2-elevation-surface</code>
        </p>
        <AvatarGroup size="md" shape="circle">
          {["A", "B", "C"].map((s) => (
            <Avatar key={s} size="md" shape="circle">
              <AvatarFallback>{s}</AvatarFallback>
              <AvatarBadge status="online" />
            </Avatar>
          ))}
          <AvatarGroupCount>+2</AvatarGroupCount>
        </AvatarGroup>
      </div>

      <div
        className="flex flex-col gap-ds2-xs rounded-ds2-l bg-ds2-raised p-ds2-s"
        style={{ "--avatar-ring-color": "var(--ds2-elevation-raised)" } as React.CSSProperties}
      >
        <p className="ds2-body-md text-ds2-subtle">
          Raised card — override <code>--avatar-ring-color</code>
        </p>
        <AvatarGroup size="md" shape="circle">
          {["A", "B", "C"].map((s) => (
            <Avatar key={s} size="md" shape="circle">
              <AvatarFallback>{s}</AvatarFallback>
              <AvatarBadge status="online" />
            </Avatar>
          ))}
          <AvatarGroupCount>+2</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </div>
  ),
}
