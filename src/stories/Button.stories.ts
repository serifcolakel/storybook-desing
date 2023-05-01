import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    backgroundColor: "#ff0000",
    onClick: () => { alert("Primary Clicked!"); },
    size: "medium",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    backgroundColor: "#00ff00",
    onClick: () => { alert("Secondary Clicked!"); },
    size: "medium",
    primary: false,
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    backgroundColor: "#0000ff",
    onClick: () => { alert("Large Clicked!"); },
    size: "medium",
    primary: false,
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    backgroundColor: "#0000ff",
    onClick: () => { alert("Small Clicked!"); },
    size: "medium",
    primary: false,
  },
};
