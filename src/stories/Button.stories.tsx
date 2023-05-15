import type { Meta, StoryObj } from "@storybook/react";
import { FaBeer, Fa500Px,FaAccessibleIcon,FaAccusoft } from "react-icons/fa";
import Button from "../components/button/Button";

const buttonIcons: Record<string, React.ReactNode> = {
  faBeer: <FaBeer />,
  fa500Px: <Fa500Px />,
  faAccessibleIcon: <FaAccessibleIcon />,
  faAccusoft: <FaAccusoft />,
}

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
   leftIcon: {
    description: "The button left icon (optional)",
    options: Object.keys(buttonIcons),
    mapping: buttonIcons,
   },
   rightIcon: {
    description: "The button right icon (optional)",
    options: Object.keys(buttonIcons),
    mapping: buttonIcons,
   }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

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
  // custom render function
  render: (args): JSX.Element => {
    window.console.log("Buttonargs", args);

    return <Button {...args} />;
  },
  decorators: [
    (Story: React.ComponentType): JSX.Element => (
      <Story />
    ),
  ],
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
