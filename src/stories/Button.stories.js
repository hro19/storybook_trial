import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Success = {
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: '#3dc361',
  },
};

export const Warning = {
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: '#f87515',
  },
};

export const Danger = {
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: '#eb4234',
  },
};