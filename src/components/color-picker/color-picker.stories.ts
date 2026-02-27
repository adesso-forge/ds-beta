import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './color-picker.js';

const meta: Meta = {
  title: 'Input/Color Picker',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<beta-color-picker label="Color"></beta-color-picker>`,
};
