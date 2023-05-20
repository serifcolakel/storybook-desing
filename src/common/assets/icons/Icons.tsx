export interface IconProps {
	size?: number;
	onClick?: () => void;
	className?: string;
	color?: string;
}

export function ChevronRightIcon({
	size = 18,
	onClick,
	className,
	color,
}: IconProps) {
	return (
		<svg
			className={className}
			fill="none"
			height={size}
			onClick={onClick}
			viewBox="0 0 6 10"
			width={size - 4}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 1L5 5L1 9"
				stroke={color != null ? color : "currentColor"}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</svg>
	);
}
