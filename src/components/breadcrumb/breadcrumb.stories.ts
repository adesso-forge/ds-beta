import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './breadcrumb.js';

const meta: Meta = {
  title: 'Navigation/Breadcrumb',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<beta-breadcrumb
      ><beta-breadcrumb-item>Home</beta-breadcrumb-item
      ><beta-breadcrumb-item>Products</beta-breadcrumb-item
      ><beta-breadcrumb-item>Shoes</beta-breadcrumb-item></beta-breadcrumb
    >`,
};
