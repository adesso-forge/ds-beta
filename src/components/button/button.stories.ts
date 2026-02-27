import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './button.js';

const meta: Meta = {
  title: 'Action/Button',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<beta-button>Button</beta-button>`,
};

export const Variants: Story = {
  render: () => html`
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
      <beta-button variant="default">Default</beta-button>
      <beta-button variant="primary">Primary</beta-button>
      <beta-button variant="success">Success</beta-button>
      <beta-button variant="neutral">Neutral</beta-button>
      <beta-button variant="warning">Warning</beta-button>
      <beta-button variant="danger">Danger</beta-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;gap:0.5rem;align-items:center">
      <beta-button size="small">Small</beta-button>
      <beta-button size="medium">Medium</beta-button>
      <beta-button size="large">Large</beta-button>
    </div>
  `,
};
