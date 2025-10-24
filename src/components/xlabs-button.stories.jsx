import { fn } from 'storybook/test';
import XlabsButton from './xlabs-button';

// Default export controls Storybook’s sidebar and docs rendering
export default {
  title: 'Components/XlabsButton',
  component: XlabsButton,
  parameters: {
    layout: 'centered', // Centers the button in the Canvas
  },
  tags: ['autodocs'], // Enables autodocs for prop tables and documentation
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['primary', 'secondary'],
      description: 'Button style variant. "primary" is blue, "secondary" is gray.'
    },
    children: { 
      control: 'text',
      description: 'Content inside the button.'
    },
  },
  args: {
    onClick: fn(), // Action logging in Storybook’s actions panel
  },
};

// Stories in object format, each with custom args
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const LargeText = {
  args: {
    variant: 'primary',
    children: 'Large Primary Button',
  },
};

export const SmallText = {
  args: {
    variant: 'secondary',
    children: 'Small Secondary Button',
  },
};
