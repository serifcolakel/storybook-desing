import React, { type ComponentPropsWithRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

const buttonStyles = cva("flex flex-row gap-x-4", {
	variants: {
		buttonType: {
			primary: "bg-blue-500 text-white border-blue-500 hover:bg-blue-600",
			secondary: "bg-white text-blue-500 border-blue-500 hover:bg-blue-50",
			outline: "border-blue-500 hover:bg-blue-50",
			ghost: "text-blue-500 hover:bg-blue-50",
			link: "text-blue-500 hover:underline",
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
	compoundVariants: [
		{ buttonType: "primary", size: "default" },
	],
	defaultVariants: {
		buttonType: "primary",
		size: "default",
		radius: "default",
	},
});

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
