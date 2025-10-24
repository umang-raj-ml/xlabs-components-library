import { fn } from 'storybook/test';
import XlabsRadio from './xlabs-radio';

export default {
  title: 'Components/XlabsRadio',
  component: XlabsRadio,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: 'Radio selection state.' },
    label: { control: 'text', description: 'Radio label.' },
    name: { control: 'text', description: 'Radio group name.' },
  },
  args: { onChange: fn() },
};

export const Off = { args: { checked: false, label: 'Option', name: 'group1' } };
export const On = { args: { checked: true, label: 'Selected', name: 'group1' } };
