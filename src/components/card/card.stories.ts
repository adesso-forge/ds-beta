import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './card.js';

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<beta-card>
      <div slot="header">Warm Card</div>
      This is a playful card with rounded corners and hover effects.
      <div slot="footer">Footer content</div>
    </beta-card>`,
};

export const Elevated: Story = {
  render: () =>
    html`<beta-card elevated>
      <div slot="header">Elevated Card</div>
      This card has a warm orange glow effect.
      <div slot="footer">Premium content</div>
    </beta-card>`,
};

export const Gallery: Story = {
  render: () =>
    html`<div
      style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 800px;"
    >
      ${[1, 2, 3].map(
        (i) =>
          html`<beta-card ?elevated=${i === 2}>
            <div slot="header">Card ${i}</div>
            Content for card ${i}. ${i === 2 ? 'This one is elevated!' : ''}
          </beta-card>`,
      )}
    </div>`,
};
