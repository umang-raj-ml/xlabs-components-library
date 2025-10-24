import XlabsText from './xlabs-text';

export default {
  title: 'Components/XlabsText',
  component: XlabsText,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Text content.' },
    size: { control: 'select', options: ['lg', 'md', 'sm'], description: 'Font size.' },
    color: { control: 'select', options: ['black', 'gray'], description: 'Text color.' },
  },
};

export const Default = { args: { children: 'Sample Text', size: 'md', color: 'black' } };
export const Large = { args: { children: 'Large Text', size: 'lg', color: 'black' } };
export const Gray = { args: { children: 'Gray Text', size: 'md', color: 'gray' } };
