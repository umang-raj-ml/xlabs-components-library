import XlabsDivider from './xlabs-divider';

export default {
  title: 'Components/XlabsDivider',
  component: XlabsDivider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'text', description: 'Divider color (Tailwind color class name).' },
  },
};

export const Default = { args: { color: 'gray-300' } };
export const Blue = { args: { color: 'blue-400' } };
