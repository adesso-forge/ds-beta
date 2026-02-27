import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tab-group.js';

const meta: Meta = {
  title: 'Containment/Tab Group',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<beta-tab-group
      ><beta-tab slot="nav" panel="general">General</beta-tab
      ><beta-tab slot="nav" panel="details">Details</beta-tab
      ><beta-tab-panel name="general">General content</beta-tab-panel
      ><beta-tab-panel name="details">Details content</beta-tab-panel></beta-tab-group
    >`,
};
