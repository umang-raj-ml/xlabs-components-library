import XlabsBadge from './xlabs-badge';

export default {
  title: 'Components/XlabsBadge',
  component: XlabsBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Badge text.' },
    color: { control: 'select', options: ['green', 'blue', 'gray'], description: 'Badge color.' },
  },
};

export const GreenBadge = { args: { children: 'Success', color: 'green' } };
export const BlueBadge = { args: { children: 'Info', color: 'blue' } };
export const GrayBadge = { args: { children: 'Neutral', color: 'gray' } };
