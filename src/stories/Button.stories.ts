import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/button/Button";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    onClick: () => { alert("Primary Clicked!"); },
    children: "Primary",
    size: "default",
  },
};

export const Secondary: Story = {
  args: {
    onClick: () => { alert("Secondary Clicked!"); },
    children: "Secondary",
    buttonType: "secondary",
    size: "large",
  },
};

export const Large: Story = {
  args: {
    onClick: () => { alert("Large Clicked!"); },
    children: "Large",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    onClick: () => { alert("Small Clicked!"); },
    children: "Small",
    size: "small",
  },
};
