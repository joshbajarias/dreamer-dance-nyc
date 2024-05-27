import { Meta, StoryObj } from '@storybook/react';
import Header, { HeaderProps } from './Header';

const meta: Meta<HeaderProps> = {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    textAlign: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
    },
    width: { control: 'text' },
    height: { control: 'text' },
    textHeight: {
      control: { type: 'select', options: ['top', 'center', 'bottom'] },
    },
    links: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Primary: Story = {
  args: {
    label: "Dreamer Dance NYC",
    backgroundColor: "#d761a7",
    size: 'medium',
    textAlign: 'center',
    width: '100%',
    height: "150px",
    textHeight: "center",
    links: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
      { name: 'Contact', url: '/contact' },
    ],
  },
};
