import XlabsGallery from './xlabs-gallery';

export default {
  title: 'Components/XlabsGallery',
  component: XlabsGallery,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'object', description: 'Array of image URLs.' },
  },
};

export const Default = {
  args: {
    images: [
      'https://placecats.com/300/200',
      'https://placecats.com/300/400',
      'https://placecats.com/400/300',
      'https://placecats.com/500/400',
    ]
  }
};
