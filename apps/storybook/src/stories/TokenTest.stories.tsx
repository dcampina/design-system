import type { Meta, StoryObj } from '@storybook/react'

function TokenTest() {
  return (
    <div className="bg-ds2-surface p-ds2-m rounded-ds2-l">
      <h1 className="ds2-headline-md text-ds2-title">Indigo Design System</h1>
      <p className="ds2-body-md text-ds2-subtle">Tokens and Tailwind are working.</p>
      <button className="bg-ds2-brand-base text-ds2-inverted ds2-button px-ds2-s py-ds2-xxs rounded-ds2-m mt-ds2-s">
        Primary Button
      </button>
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