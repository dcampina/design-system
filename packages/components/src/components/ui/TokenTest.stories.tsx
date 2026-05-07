import type { Meta, StoryObj } from '@storybook/react'

function TokenTest() {
  return (
    <div className="min-h-[320px] bg-ds3-surface p-ds3-l text-ds3-default">
      <div className="mx-auto max-w-[1100px] space-y-ds3-l">
        <header className="space-y-ds3-xs">
          <p className="font-ds3-caption-lg text-ds3-caption">TokenTest</p>
          <h1 className="font-ds3-display-sm text-ds3-title">DS3 tokens preset check</h1>
          <p className="font-ds3-body-md text-ds3-subtle">
            If you see consistent spacing/typography and the swatches are colored (not transparent / default),
            then the ds3 Tailwind preset + CSS variables are applied. Corners use the default Tailwind radius scale.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-ds3-m md:grid-cols-3">
          <div className="rounded-lg border border-ds3-subtle bg-ds3-overlay p-ds3-m">
            <h2 className="font-ds3-title-sm text-ds3-title">Spacing + radius</h2>
            <p className="mt-ds3-xs font-ds3-body-sm text-ds3-subtle">
              This card uses `p-ds3-m`, `rounded-lg`, `border-ds3-subtle`.
            </p>
            <div className="mt-ds3-s flex items-center gap-ds3-xs">
              <span className="rounded-full bg-ds3-selected px-ds3-xs py-ds3-xxs font-ds3-tag text-ds3-selected">
                pill
              </span>
              <span className="rounded-sm bg-ds3-neutral px-ds3-xs py-ds3-xxs font-ds3-tag text-ds3-default">
                tag
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-ds3-subtle bg-ds3-overlay p-ds3-m">
            <h2 className="font-ds3-title-sm text-ds3-title">Typography plugin</h2>
            <p className="mt-ds3-xs font-ds3-body-md text-ds3-default">
              Body md (`font-ds3-body-md`)
            </p>
            <p className="mt-ds3-xxs font-ds3-body-sm text-ds3-subtle">
              Body sm (`font-ds3-body-sm`)
            </p>
            <p className="mt-ds3-xxs font-ds3-caption-md text-ds3-caption">
              Caption md (`font-ds3-caption-md`)
            </p>
            <div className="mt-ds3-s flex flex-wrap gap-ds3-xs">
              <button className="rounded bg-ds3-brand-bold px-ds3-s py-ds3-xs font-ds3-button text-ds3-inverted">
                Brand
              </button>
              <button className="rounded bg-ds3-success-bold px-ds3-s py-ds3-xs font-ds3-button text-ds3-inverted">
                Success
              </button>
              <button className="rounded bg-ds3-danger-bold px-ds3-s py-ds3-xs font-ds3-button text-ds3-inverted">
                Danger
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-ds3-subtle bg-ds3-overlay p-ds3-m">
            <h2 className="font-ds3-title-sm text-ds3-title">Border + ring</h2>
            <p className="mt-ds3-xs font-ds3-body-sm text-ds3-subtle">
              Focus ring should be blue and offset should match surface.
            </p>
            <div className="mt-ds3-s space-y-ds3-xs">
              <input
                className="w-full rounded border border-ds3-input bg-ds3-input px-ds3-s py-ds3-xs font-ds3-body-md text-ds3-default ring-2 ring-ds3-focused ring-offset-2 ring-offset-ds3-surface outline-none"
                defaultValue="Focused input (static)"
                readOnly
              />
              <div className="rounded border border-ds3-selected bg-ds3-selected p-ds3-s text-ds3-selected">
                <p className="font-ds3-body-sm">Selected</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-ds3-subtle bg-ds3-overlay p-ds3-m">
          <h2 className="font-ds3-title-sm text-ds3-title">Background + text swatches</h2>
          <div className="mt-ds3-s grid grid-cols-2 gap-ds3-xs md:grid-cols-5">
            <div className="rounded bg-ds3-neutral p-ds3-s">
              <p className="font-ds3-caption-md text-ds3-default">neutral</p>
            </div>
            <div className="rounded bg-ds3-information p-ds3-s">
              <p className="font-ds3-caption-md text-ds3-information">information</p>
            </div>
            <div className="rounded bg-ds3-success p-ds3-s">
              <p className="font-ds3-caption-md text-ds3-success">success</p>
            </div>
            <div className="rounded bg-ds3-warning p-ds3-s">
              <p className="font-ds3-caption-md text-ds3-warning">warning</p>
            </div>
            <div className="rounded bg-ds3-danger p-ds3-s">
              <p className="font-ds3-caption-md text-ds3-danger">danger</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const meta = {
  title: 'Indigo/TokenTest',
  component: TokenTest,
} satisfies Meta<typeof TokenTest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}