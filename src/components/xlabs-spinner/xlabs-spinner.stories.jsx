import XlabsSpinner from './xlabs-spinner';

export default {
  title: 'Components/XlabsSpinner',
  component: XlabsSpinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'number', description: 'Spinner diameter in px.' },
  },
};

export const Default = { args: { size: 24 } };
export const Large = { args: { size: 60 } };
