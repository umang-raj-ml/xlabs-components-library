import { useState } from 'react';
import XlabsModal from './xlabs-modal';

export default {
  title: 'Components/XlabsModal',
  component: XlabsModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Whether modal is open.' },
    children: { control: 'text', description: 'Modal content.' },
  },
};

export const Closed = { args: { open: false, children: 'This is the modal content.' } };
// For live demo, you may need to handle modal toggling in a Canvas story.
export const Open = { args: { open: true, children: 'Modal is open!' } };
