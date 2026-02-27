import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './skeleton.js';

const meta: Meta = {
  title: 'Layout/Skeleton',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<beta-skeleton effect="sheen"></beta-skeleton>`,
};

export const Circle: Story = {
  render: () =>
    html`<beta-skeleton
      effect="sheen"
      style="width:50px;height:50px;--border-radius:50%"
    ></beta-skeleton>`,
};
