import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    label: 'Welcome to Dreamer Dance NYC',
  },
};
