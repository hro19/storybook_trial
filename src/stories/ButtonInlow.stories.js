import { ButtonInLow } from './ButtonInLow';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/ButtonInLow',
  component: ButtonInLow,
  tags: ['autodocs'],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Flex_spacebetween = {
  args: {
    justifyContent: 'normal',
  },
};

export const Flex_center = {
  args: {
    justifyContent: 'center',
  },
};

export const Flex_right = {
  args: {
    justifyContent: 'end',
  },
};
