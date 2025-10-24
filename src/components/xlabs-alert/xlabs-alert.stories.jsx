import XlabsAlert from './xlabs-alert';

export default {
  title: 'Components/XlabsAlert',
  component: XlabsAlert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'error'],
      description: 'Alert type.',
    },
    children: { control: 'text', description: 'Alert message content.' },
  },
};

export const Info = { args: { type: 'info', children: 'Info alert message.' } };
export const Success = { args: { type: 'success', children: 'Operation succeeded!' } };
export const Error = { args: { type: 'error', children: 'Operation failed!' } };
