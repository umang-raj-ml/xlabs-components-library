import { fn } from 'storybook/test';
import XlabsInput from './xlabs-input';

export default {
  title: 'Components/XlabsInput',
  component: XlabsInput,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Input value.' },
    placeholder: { control: 'text', description: 'Input placeholder text.' },
  },
  args: { onChange: fn() },
};

export const Default = { args: { value: '', placeholder: 'Enter text' } };
export const WithValue = { args: { value: 'Hello', placeholder: 'Enter text' } };
