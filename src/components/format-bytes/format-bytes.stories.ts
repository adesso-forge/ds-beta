import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './format-bytes.js';

const meta: Meta = {
  title: 'Data Display/Format Bytes',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<beta-format-bytes value="1024"></beta-format-bytes>`,
};
