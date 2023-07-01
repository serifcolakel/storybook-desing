import styled from "styled-components";

export const HorizontalScrollWrapper = styled.div`
	overflow-x: scroll;
	width: 100%;
	::-webkit-scrollbar {
		display: none;
	};
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

export const HorizontalScrollContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
`;

