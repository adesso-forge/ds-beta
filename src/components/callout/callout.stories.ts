import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './callout.js';

const meta: Meta = {
  title: 'Containment/Callout',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<beta-callout>This is an important callout message.</beta-callout>`,
};
