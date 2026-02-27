import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './radio-group.js';

const meta: Meta = {
  title: 'Input/Radio Group',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<beta-radio-group label="Select an option" value="1"
      ><beta-radio value="1">Option 1</beta-radio><beta-radio value="2">Option 2</beta-radio
      ><beta-radio value="3">Option 3</beta-radio></beta-radio-group
    >`,
};
