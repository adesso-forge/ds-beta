import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './button-group.js';

const meta: Meta = {
  title: 'Action/Button Group',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<beta-button-group
      ><beta-button>Left</beta-button><beta-button>Center</beta-button
      ><beta-button>Right</beta-button></beta-button-group
    >`,
};
