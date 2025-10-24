import XlabsSkeleton from './xlabs-skeleton';

export default {
  title: 'Components/XlabsSkeleton',
  component: XlabsSkeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text', description: 'Skeleton width.' },
    height: { control: 'number', description: 'Skeleton height in px.' },
  },
};

export const Default = { args: { width: '100%', height: 20 } };
export const Large = { args: { width: '100%', height: 60 } };
