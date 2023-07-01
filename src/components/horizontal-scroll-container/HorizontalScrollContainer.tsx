import useHorizontalScroll from "./useHorizontalScroll";
import { HorizontalScrollWrapper } from "./StyledComponents";

interface Props {
	children: React.ReactNode;
}

export default function HorizontalScrollContainer({ children }: Props) {
	const { containerRef, scrollId } = useHorizontalScroll();

	return (
		<HorizontalScrollWrapper
			data-testid="horizontal-scroll-container"
			id={scrollId}
			ref={containerRef}
		>
			{children}
		</HorizontalScrollWrapper>
	);
}
