import React, { type ComponentPropsWithRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

const buttonStyles = cva(
	"flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center",
	{
		variants: {
			buttonType: {
				primary:
					"bg-violet-500 text-white border-violet-500 hover:bg-violet-600",
				secondary: "bg-white text-blue-500 border-blue-500 hover:bg-blue-50",
				outline:
					"bg-white text-gray-600 border-gray-500 hover:bg-gray-100 border hover:border-gray-100 border-gray-300  hover:shadow-md",
				ghost: "text-blue-500 hover:bg-blue-50",
				link: "text-blue-500 hover:underline",
				disabled: "bg-gray-200 text-gray-400 border-gray-200",
				error: "bg-red-500 text-white border-red-500 hover:bg-red-600",
			},
			size: {
				default: ["text-base", "py-2", "px-4"],
				small: ["text-sm", "py-1", "px-2"],
				large: ["text-lg", "py-3", "px-6"],
				xxl: ["text-2xl", "py-4", "px-8"],
			},
			radius: {
				default: "rounded-md",
				sm: "rounded-sm",
				lg: "rounded-lg",
				xl: "rounded-xl",
				xxl: "rounded-2xl",
				none: "rounded-none",
				full: "rounded-full",
			},
		},
		compoundVariants: [{ buttonType: "primary", size: "default" }],
		defaultVariants: {
			buttonType: "primary",
			size: "default",
			radius: "default",
		},
	},
);

type ButtonElementProps = ComponentPropsWithRef<"button">;

export interface ButtonProps
	extends ButtonElementProps,
		VariantProps<typeof buttonStyles> {
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

export default function Button({
	className,
	buttonType,
	size,
	radius,
	rightIcon,
	leftIcon,
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(className, buttonStyles({ buttonType, size, radius }))}
			{...props}
			type="button"
		>
			{Boolean(leftIcon) && leftIcon}
			{props.children}
			{Boolean(rightIcon) && rightIcon}
		</button>
	);
}
