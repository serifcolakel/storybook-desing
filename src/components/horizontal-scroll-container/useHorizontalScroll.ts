import { useEffect, useId, useRef } from "react";

export default function useHorizontalScroll(): {
	containerRef: React.RefObject<HTMLDivElement>;
	scrollId: string;
} {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const scrollId = useId();

	const handleWheelScroll = (event: WheelEvent) => {
		event.preventDefault();

		const container = containerRef.current;

		if (container == null) return;

		const maxScrollLeft = container.scrollWidth - container.clientWidth;

		// Calculate the new scroll position
		const newScrollLeft = container.scrollLeft + event.deltaY;

		// Ensure the new scroll position stays within bounds
		const scrollLeft = Math.max(0, Math.min(maxScrollLeft, newScrollLeft));

		// Only update the scroll position if it has changed
		if (container.scrollLeft !== scrollLeft) {
			container.scrollLeft = scrollLeft;
		}
	};

	useEffect(() => {
		const container = containerRef.current;

		if (container != null) {
			container.addEventListener("wheel", handleWheelScroll);
		}

		return () => {
			if (container != null) {
				container.removeEventListener("wheel", handleWheelScroll);
			}
		};
	}, []);

	return {
		containerRef,
		scrollId,
	};
}
