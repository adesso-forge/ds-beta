import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './dropdown.js';

const meta: Meta = {
  title: 'Navigation/Dropdown',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<beta-dropdown
      ><beta-button slot="trigger" caret>Dropdown</beta-button>
      <div style="padding:0.5rem">Dropdown content</div></beta-dropdown
    >`,
};
