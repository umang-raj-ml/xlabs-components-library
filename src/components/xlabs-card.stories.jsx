import XlabsCard from './xlabs-card';

export default {
  title: 'Components/XlabsCard',
  component: XlabsCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Card content.' },
  },
};

export const WithContent = { args: { children: 'This is a Card' } };
export const LongerContent = { args: { children: 'Multiple lines\nSecond line\nThird line' } };
