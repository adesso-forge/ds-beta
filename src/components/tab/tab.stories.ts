import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tab.js';

const meta: Meta = {
  title: 'Containment/Tab',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<beta-tab panel="tab-1">Tab Label</beta-tab>`,
};
