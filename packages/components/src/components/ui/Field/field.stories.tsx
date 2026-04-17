import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "@/components/ui/Input/Input"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./field"

const ORIENTATIONS = ["vertical", "horizontal", "responsive"] as const

const meta = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

type PlaygroundArgs = {
  orientation: (typeof ORIENTATIONS)[number]
  label: string
  description: string
  showError: boolean
  disabled: boolean
  invalid: boolean
}

export const Playground: StoryObj<PlaygroundArgs> = {
  parameters: {
    controls: {
      include: [
        "orientation",
        "label",
        "description",
        "showError",
        "disabled",
        "invalid",
      ],
    },
  },
  args: {
    orientation: "vertical",
    label: "Headline",
    description: "Shown under the field when set.",
    showError: false,
    disabled: false,
    invalid: false,
  },
  argTypes: {
    orientation: { control: "select", options: ORIENTATIONS },
    label: { control: "text" },
    description: { control: "text" },
    showError: { control: "boolean" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
  render: ({
    orientation,
    label,
    description,
    showError,
    disabled,
    invalid,
  }) => (
    <Field
      data-disabled={disabled || undefined}
      data-invalid={invalid || undefined}
      orientation={orientation}
      className="max-w-md"
    >
      <FieldLabel htmlFor="field-playground-input">{label}</FieldLabel>
      <FieldContent>
        <Input
          id="field-playground-input"
          disabled={disabled}
          aria-invalid={invalid || undefined}
          placeholder="Type here…"
        />
        {description ? (
          <FieldDescription>{description}</FieldDescription>
        ) : null}
        {showError ? (
          <FieldError>This headline is required.</FieldError>
        ) : null}
      </FieldContent>
    </Field>
  ),
}

export const Orientations: Story = {
  render: () => (
    <FieldGroup className="max-w-xl gap-ds2-l">
      <Field orientation="vertical">
        <FieldLabel htmlFor="f-vert">Vertical</FieldLabel>
        <FieldContent>
          <Input id="f-vert" placeholder="Vertical layout" />
          <FieldDescription>Label stacks above the control.</FieldDescription>
        </FieldContent>
      </Field>

      <Field orientation="horizontal">
        <FieldLabel htmlFor="f-horiz">Horizontal</FieldLabel>
        <FieldContent>
          <Input id="f-horiz" placeholder="Horizontal layout" />
        </FieldContent>
      </Field>

      <Field orientation="responsive">
        <FieldLabel htmlFor="f-resp">Responsive</FieldLabel>
        <FieldContent>
          <Input id="f-resp" placeholder="Column on small, row on md+" />
          <FieldDescription>
            Stacks on narrow viewports; aligns in a row from the medium
            breakpoint.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

export const FieldSetWithLegend: Story = {
  render: () => (
    <FieldSet className="max-w-md">
      <FieldLegend>Notifications</FieldLegend>
      <Field>
        <FieldTitle>Email digest</FieldTitle>
        <FieldContent>
          <Input placeholder="you@example.com" />
          <FieldDescription>We never share your address.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldSet>
  ),
}

export const LegendAsLabelVariant: Story = {
  render: () => (
    <FieldSet className="max-w-md">
      <FieldLegend variant="label">Account</FieldLegend>
      <Field>
        <FieldLabel htmlFor="legend-label-username">Username</FieldLabel>
        <FieldContent>
          <Input id="legend-label-username" />
        </FieldContent>
      </Field>
    </FieldSet>
  ),
}

export const SeparatorStory: Story = {
  name: "Field separator",
  render: () => (
    <FieldGroup className="max-w-md">
      <Field>
        <FieldLabel htmlFor="sep-a">First</FieldLabel>
        <FieldContent>
          <Input id="sep-a" />
        </FieldContent>
      </Field>
      <FieldSeparator />
      <Field>
        <FieldLabel htmlFor="sep-b">Second</FieldLabel>
        <FieldContent>
          <Input id="sep-b" />
        </FieldContent>
      </Field>
      <FieldSeparator>or</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="sep-c">Third</FieldLabel>
        <FieldContent>
          <Input id="sep-c" />
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
}

export const FieldErrorModes: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-ds2-l">
      <Field data-invalid>
        <FieldLabel htmlFor="err-inline">Inline message</FieldLabel>
        <FieldContent>
          <Input id="err-inline" aria-invalid defaultValue="" />
          <FieldError>Please enter a value.</FieldError>
        </FieldContent>
      </Field>

      <Field data-invalid>
        <FieldLabel htmlFor="err-list">From error objects</FieldLabel>
        <FieldContent>
          <Input id="err-list" aria-invalid />
          <FieldError
            errors={[
              { message: "Too short." },
              { message: "Must contain a number." },
            ]}
          />
        </FieldContent>
      </Field>
    </div>
  ),
}
