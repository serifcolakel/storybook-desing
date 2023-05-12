import React, { useState } from "react";

const placementClassNames = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
	left: "right-full top-1/2 -translate-y-1/2 mr-3",
	right: "left-full top-1/2 -translate-y-1/2 ml-3",
} as const;

const placementArrowClassNames = {
	top: "absolute -rotate-90 -translate-x-[42%] -top-4 left-1/2",
	bottom: "absolute -rotate-[270deg] -translate-x-[42%] -bottom-4 left-1/2",
	left: "absolute -translate-y-[42%] -left-3 top-1/2 rotate-180",
	right: "absolute -translate-y-[42%] -right-3 top-1/2",
} as const;

const Placement = {
	TOP: "top",
	BOTTOM: "bottom",
	LEFT: "left",
	RIGHT: "right",
} as const;

interface TooltipProps {
	/**
	 * @description The content of the tooltip.
	 * @type {string | React.ReactNode}
	 * @default ''
	 * @example
	 * <Tooltip content="Tooltip content">
	 *   <Button label="Hover me Example - 1" />
	 * </Tooltip>
	 * @example
	 * <Tooltip content={<div>Tooltip content</div>}>
	 *  <Button label="Hover me Example - 2" />
	 * </Tooltip>
	 */
	content: string | React.ReactNode;
	/**
	 * @description The placement of the tooltip.
	 * @type {'top' | 'bottom' | 'left' | 'right'}
	 * @default 'top'
	 * @example
	 * <Tooltip content="Tooltip content" placement="top">
	 *   <Button label="Hover me" />
	 * </Tooltip>
	 */
	placement?: keyof typeof placementClassNames;
	/**
	 * @description The children of the tooltip.
	 * @type {React.ReactNode}
	 * @required You must provide a children.
	 */
	children: React.ReactNode;
	/**
	 * @description The delay after visibility change.
	 * @type {number}
	 * @default 0.2
	 */
	hideAfterDelay?: 0.2 | 0.4 | 0.6 | 0.8 | 1 | 1.2 | 1.4 | 1.6 | 1.8 | 2;
	/**
	 * @description The callback when the tooltip is clicked.
	 * @returns {void}
	 */
	onClick?: () => void;
}

function ArrowIcon({ className }: { className: string }) {
	return (
		<svg
			className={className}
			height="16px"
			version="1.1"
			viewBox="0 0 9 16"
			width="9px"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<g
				fill="none"
				fillRule="evenodd"
				id="Page-1"
				stroke="none"
				strokeWidth="1"
			>
				<g
					fill="#ccc"
					id="Tooltips-"
					transform="translate(-874.000000, -1029.000000)"
				>
					<g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
						<g id="Group-2" transform="translate(24.000000, 0.000000)">
							<polygon
								id="Triangle"
								points="4.5 57.5 12.5 66.5 -3.5 66.5"
								transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

export default function Tooltip({
	onClick,
	content,
	placement,
	children,
	hideAfterDelay = 0.2,
}: TooltipProps) {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		if (hideAfterDelay > 0) {
			setTimeout(() => {
				setShowTooltip(false);
			}, hideAfterDelay * 1000);

			return;
		}

		if (showTooltip) {
			setShowTooltip(false);
		}
	};

	const handlePosition = () => {
		switch (placement) {
			case Placement.RIGHT:
				return placementClassNames.right;
			case Placement.BOTTOM:
				return placementClassNames.bottom;
			case Placement.LEFT:
				return placementClassNames.left;
			default:
				return placementClassNames.top;
		}
	};

	const handleArrowPosition = () => {
		switch (placement) {
			case Placement.RIGHT:
				return placementArrowClassNames.right;
			case Placement.BOTTOM:
				return placementArrowClassNames.bottom;
			case Placement.LEFT:
				return placementArrowClassNames.left;
			default:
				return placementArrowClassNames.top;
		}
	};

	return (
		<div
			aria-hidden="true"
			className="relative inline-block hover:cursor-pointer"
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{showTooltip ? <ArrowIcon className={handleArrowPosition()} /> : null}
			<div className="p-2 hover:rounded-full hover:opacity-50 hover:bg-gray-200">
				{children}
			</div>
			{showTooltip ? (
				<div
					className={`absolute z-10 bg-white border rounded-lg
            shadow-md border-gray-200 text-gray-500 whitespace-nowrap p-6 ${handlePosition()}`}
				>
					{content}
				</div>
			) : null}
		</div>
	);
}
