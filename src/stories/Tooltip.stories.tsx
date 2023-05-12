import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../components/tooltip/Tooltip";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: "Example/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
  decorators: [
		(Story: React.ComponentType): JSX.Element => (
			<div className="flex items-center justify-center w-full h-screen">
				<Story />
			</div>
		),
	],
	argTypes: {
		hideAfterDelay: {
			description: "Hide tooltip after delay in seconds",
			control: {
				type: "number",
				min: 0.2,
				max: 2,
				step: 0.2,
			},
		},
		children: {
			description: "Tooltip content it can be string or ReactNode",
		},
		placement: {
			description: "Tooltip placement",
			mapping: ["top", "bottom", "left", "right"],
			options: ["top", "bottom", "left", "right"],
		},
		onClick: {
			description: "Tooltip onClick event",
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultTooltip: Story = {
	args: {
		content: "Tooltip content goes here",
		hideAfterDelay: 2,
		children: "Primary",
		placement: "right",
	},
};

export const WrapperTooltip: Story = {
	args: {
		content: "Tooltip content goes here",
		children: (
			<div className="cursor-pointer ">
				<svg
					aria-haspopup="true"
					className="icon icon-tabler icon-tabler-info-circle"
					fill="none"
					height="25"
					stroke="#A0AEC0"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					width="25"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0h24v24H0z" stroke="none" />
					<circle cx="12" cy="12" r="9" />
					<line x1="12" x2="12.01" y1="8" y2="8" />
					<polyline points="11 12 12 12 12 16 13 16" />
				</svg>
			</div>
		),
		placement: "right",
	},
};
