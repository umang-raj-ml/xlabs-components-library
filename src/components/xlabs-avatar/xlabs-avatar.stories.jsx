import XlabsAvatar from './xlabs-avatar';

export default {
  title: 'Components/XlabsAvatar',
  component: XlabsAvatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', description: 'Image URL for avatar.' },
    alt: { control: 'text', description: 'Alternative text.' },
    size: { control: 'number', description: 'Avatar size in pixels.' },
  },
};

export const Default = {
  args: { src: 'https://i.pravatar.cc/100', alt: 'Avatar', size: 40 },
};
export const Large = {
  args: { src: 'https://i.pravatar.cc/150', alt: 'User Avatar', size: 80 },
};
