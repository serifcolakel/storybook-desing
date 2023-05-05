import type { Meta, StoryObj } from "@storybook/react";
import ImageUpload from "../components/image-upload/ImageUpload";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: "Example/ImageUpload",
	component: ImageUpload,
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		getManuelData: (newState) => {
			window.console.log(newState);
		},
		onFilesUpload: (file) => {
			window.console.log(file);
		},
	},
};
