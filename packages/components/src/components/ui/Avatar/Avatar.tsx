import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { Circle, Clock, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

// ─── Types ─────────────────────────────────────────────────────────────────

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl"
export type AvatarShape = "circle" | "square"
export type AvatarStatus = "online" | "away" | "offline"

// ─── Status config ─────────────────────────────────────────────────────────
// Color and icon are coupled to status — changing one always changes the other.
// This prevents the two from ever drifting out of sync.

const statusConfig: Record<
  AvatarStatus,
  { label: string; bg: string; icon: React.ElementType }
> = {
  online:  { label: "Online",  bg: "bg-ds2-success-bold", icon: Circle },
  away:    { label: "Away",    bg: "bg-ds2-warning-bold",  icon: Clock  },
  offline: { label: "Offline", bg: "bg-ds2-neutral-bold", icon: Minus  },
}

// ─── Size maps ─────────────────────────────────────────────────────────────

// xs=16 · sm=24 · md=32 · lg=40 · xl=96  (2xl removed in new Figma)
const sizeClass: Record<AvatarSize, string> = {
  xs: "size-4",
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
  xl: "size-24",
}

// New Figma: square has no border-radius (fully square at all sizes).
// Circle is always fully rounded.
const radiusClass: Record<AvatarShape, string> = {
  circle: "rounded-ds2-full after:rounded-ds2-full",
  square: "rounded-none after:rounded-none",
}

// Image/fallback cannot rely on border-radius: inherit — it often fails for
// absolutely positioned layers + token radii. Match root via data-shape + group.
const contentRadiusClass =
  "group-data-[shape=circle]/avatar:rounded-ds2-full group-data-[shape=square]/avatar:rounded-none"

// ─── Avatar (Root) ─────────────────────────────────────────────────────────

function Avatar({
  className,
  size = "md",
  shape = "circle",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: AvatarSize
  shape?: AvatarShape
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      data-shape={shape}
      className={cn(
        // Size query container so cqmin / cqw / cqh resolve for fallback initials
        "[container-type:size]",
        "group/avatar relative flex shrink-0 select-none overflow-visible",
        sizeClass[size],
        radiusClass[shape],
        // Subtle inset border via ::after — sits above image without clipping it.
        // mix-blend-darken preserves image colours in light mode.
        "after:pointer-events-none after:absolute after:inset-0 after:border after:border-ds2-subtle after:mix-blend-darken dark:after:mix-blend-lighten",
        className
      )}
      {...props}
    />
  )
}

// ─── AvatarImage ───────────────────────────────────────────────────────────
// Always render alongside AvatarFallback — Base UI handles show/hide.
// Image is the default state; fallback shows while loading or on error.
// New Figma uses object-contain (not object-cover).

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "absolute inset-0 z-0 size-full overflow-hidden object-contain",
        contentRadiusClass,
        className
      )}
      {...props}
    />
  )
}

// ─── AvatarFallback ────────────────────────────────────────────────────────
// Shown while image loads or when src is missing/broken.
//
// Background: bg-ds2-brand-subtlest (light blue, #e9f2ff)
//   Updated from the previous neutral grey to match the new Figma.
//
// Text: text-ds2-default (#172b4d)
//   Updated from text-ds2-caption to match new Figma's darker initials.
//
// Font: fluid clamp — 35% of the smaller avatar axis (cqmin), capped 6–48px.
//   Pairs with [container-type:size] on Avatar root. ds2-title-sm sets
//   Inter + weight; we override only font-size and line-height for the chip.

function AvatarFallback({
  className,
  children,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "absolute inset-0 z-[1] flex size-full items-center justify-center overflow-hidden",
        contentRadiusClass,
        "bg-ds2-brand-subtlest text-ds2-default",
        "ds2-title-sm leading-none",
        "[font-size:clamp(6px,calc(0.35*min(100cqw,100cqh)),48px)] [line-height:1]",
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  )
}

// ─── AvatarBadge ───────────────────────────────────────────────────────────
// Status indicator anchored to bottom-right.
//
// `status` drives both color and icon so they are always in sync:
//   online  → bg-ds2-success-bold + Circle
//   away    → bg-ds2-warning-bold  + Clock
//   offline → bg-ds2-neutral-bold + Minus
//
// Accessibility: role="img" + aria-label on the badge means screen readers
// announce "Online" / "Away" / "Offline" automatically. The Lucide icon is
// aria-hidden since the container label already conveys the meaning.
//
// Icons are hidden at xs and sm — the dot is too small to render them legibly.
// Color alone is used at those sizes. Icons appear from md upward.
//
// Cutout ring: defaults to registration surface (near-white in light) so the
// badge reads like the reference — a crisp halo over the photo. Override via
// `--avatar-ring-color` on Avatar when the chip sits on non-default surfaces
// (see AvatarGroup).

function AvatarBadge({
  status,
  className,
  ...props
}: React.ComponentProps<"span"> & { status?: AvatarStatus }) {
  if (!status) return null

  const { label, bg, icon: Icon } = statusConfig[status]

  return (
    <span
      data-slot="avatar-badge"
      data-status={status}
      role="img"
      aria-label={label}
      className={cn(
        "absolute z-20 inline-flex items-center justify-center",
        // Bottom-right anchor; circle: nudge along the diagonal so the dot sits
        // on the outer rim (~4:30) and overlaps the stroke like the product ref.
        "bottom-0 right-0 rounded-ds2-full",
        "group-data-[size=xs]/avatar:translate-x-[26%] group-data-[size=xs]/avatar:translate-y-[26%]",
        "group-data-[size=sm]/avatar:translate-x-[22%] group-data-[size=sm]/avatar:translate-y-[22%]",
        "group-data-[size=md]/avatar:translate-x-[18%] group-data-[size=md]/avatar:translate-y-[18%]",
        "group-data-[size=lg]/avatar:translate-x-[16%] group-data-[size=lg]/avatar:translate-y-[16%]",
        "group-data-[size=xl]/avatar:translate-x-[14%] group-data-[size=xl]/avatar:translate-y-[14%]",
        "group-data-[shape=square]/avatar:translate-x-0 group-data-[shape=square]/avatar:translate-y-0",
        bg,
        // Halo “cuts out” the portrait under the badge (screenshot-style)
        "ring-2 ring-[color:var(--avatar-ring-color,var(--ds2-elevation-surface-registration))] ring-offset-0",
        // xs: dot only, no icon (too small)
        "group-data-[size=xs]/avatar:size-1.5",
        // sm: slightly larger dot, still no icon
        "group-data-[size=sm]/avatar:size-2",
        // md+: icon visible, badge grows to fit
        "group-data-[size=md]/avatar:size-3   group-data-[size=md]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3.5 group-data-[size=lg]/avatar:[&>svg]:size-2.5",
        "group-data-[size=xl]/avatar:size-5   group-data-[size=xl]/avatar:[&>svg]:size-3",
        className
      )}
      {...props}
    >
      {/* Icon hidden at xs and sm via parent size classes above */}
      <Icon
        aria-hidden
        className={cn(
          "hidden text-ds2-inverted",
          // Show from md upward — the [&>svg] size is set on the parent above
          "group-data-[size=md]/avatar:block",
          "group-data-[size=lg]/avatar:block",
          "group-data-[size=xl]/avatar:block",
        )}
      />
    </span>
  )
}

// ─── AvatarGroup ───────────────────────────────────────────────────────────
// Pass `size` and `shape` here so AvatarGroupCount can mirror them via
// `group-data-[size|shape]/avatar-group` — inferring from children via
// `group-has` is brittle and often fails to match sibling Avatars.

function AvatarGroup({
  className,
  size = "md",
  shape = "circle",
  ...props
}: React.ComponentProps<"div"> & {
  size?: AvatarSize
  shape?: AvatarShape
}) {
  return (
    <div
      data-slot="avatar-group"
      data-size={size}
      data-shape={shape}
      className={cn(
        "group/avatar-group flex -space-x-2",
        // Later items paint above earlier ones (rings, badges, overflow chip)
        "[&>*]:relative [&>*:nth-child(1)]:z-[1] [&>*:nth-child(2)]:z-[2] [&>*:nth-child(3)]:z-[3] [&>*:nth-child(4)]:z-[4] [&>*:nth-child(5)]:z-[5] [&>*:nth-child(6)]:z-[6] [&>*:nth-child(7)]:z-[7] [&>*:nth-child(8)]:z-[8] [&>*:nth-child(9)]:z-[9] [&>*:nth-child(10)]:z-[10] [&>*:nth-child(11)]:z-[11] [&>*:nth-child(12)]:z-[12]",
        "*:data-[slot=avatar]:ring-2",
        "*:data-[slot=avatar]:[--avatar-ring-color:var(--ds2-elevation-surface)]",
        "*:data-[slot=avatar]:ring-[var(--avatar-ring-color)]",
        className
      )}
      {...props}
    />
  )
}

// ─── AvatarGroupCount ──────────────────────────────────────────────────────
// "+N" overflow chip. Mirrors AvatarGroup `size` and `shape` (set on parent).

function AvatarGroupCount({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex min-w-0 shrink-0 items-center justify-center select-none tabular-nums",
        "bg-ds2-brand-subtlest text-ds2-default font-sans font-semibold leading-none",
        "ring-2 [--avatar-ring-color:var(--ds2-elevation-surface)] ring-[var(--avatar-ring-color)]",
        // Shape: match AvatarGroup.shape (same tokens as Avatar root)
        "group-data-[shape=circle]/avatar-group:rounded-ds2-full group-data-[shape=square]/avatar-group:rounded-none",
        // Size: match AvatarGroup.size
        "group-data-[size=xs]/avatar-group:size-4  group-data-[size=xs]/avatar-group:px-px group-data-[size=xs]/avatar-group:text-[7px]",
        "group-data-[size=sm]/avatar-group:size-6  group-data-[size=sm]/avatar-group:text-[9px]",
        "group-data-[size=md]/avatar-group:size-8  group-data-[size=md]/avatar-group:text-xs group-data-[size=md]/avatar-group:px-0.5",
        "group-data-[size=lg]/avatar-group:size-10 group-data-[size=lg]/avatar-group:text-sm group-data-[size=lg]/avatar-group:px-0.5",
        "group-data-[size=xl]/avatar-group:size-24 group-data-[size=xl]/avatar-group:text-2xl group-data-[size=xl]/avatar-group:px-ds2-s",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
}
