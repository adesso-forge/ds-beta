import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tree.js';

const meta: Meta = {
  title: 'Navigation/Tree',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<beta-tree
      ><beta-tree-item>Item 1<beta-tree-item>Nested 1</beta-tree-item></beta-tree-item
      ><beta-tree-item>Item 2</beta-tree-item></beta-tree
    >`,
};
