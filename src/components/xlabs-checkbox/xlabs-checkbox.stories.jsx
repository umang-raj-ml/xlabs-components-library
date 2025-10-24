import { fn } from 'storybook/test';
import XlabsCheckbox from './xlabs-checkbox';

export default {
  title: 'Components/XlabsCheckbox',
  component: XlabsCheckbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: 'Checkbox checked state.' },
    label: { control: 'text', description: 'Checkbox label.' },
  },
  args: { onChange: fn() },
};

export const Unchecked = { args: { checked: false, label: 'Check me' } };
export const Checked = { args: { checked: true, label: 'Checked' } };
