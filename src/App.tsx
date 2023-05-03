/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from "styled-components";
import Button from "./components/button/Button";
import Checkbox from "./components/checkbox/Checkbox";

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
`;

const Wrapper = styled.section<{
	backgroundColor?: string;
}>`
	padding: 4em;
	background: ${({ backgroundColor }) => backgroundColor ?? "lightgray"};
	color: ${({ backgroundColor }) =>
		backgroundColor !== undefined ? "white" : "black"};
`;

const Button2 = styled.button`
	display: inline-block;
	color: #f0f;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 1px solid #f0f;
	background-color: white;
	border-radius: 3px;
	display: block;
	border-radius: 0.25em;
	&:hover {
		color: white;
		background-color: #f0f;
	}
`;

const TomatoButton = styled(Button2)`
	color: tomato;
	border-color: tomato;
`;

function App() {
	return (
		<Wrapper>
			<Button radius="full">Normal Button</Button>
			<Title>Hello World!</Title>
			<Button2>Normal Button</Button2>
			<Button2 as="a" href="/">
				Link with Button styles
			</Button2>
			<TomatoButton as="a" href="/">
				Link with Tomato Button styles
			</TomatoButton>
			<Checkbox label="test" rounded="full" />
			<Checkbox label="222" />
			<label
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				htmlFor="input-group-1"
			>
				Your Email
			</label>
			<div className="relative mb-6">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						className="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
					</svg>
				</div>
				<input
					// eslint-disable-next-line max-len
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					id="input-group-1"
					placeholder="name@flowbite.com"
					type="text"
				/>
			</div>
			<label
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				htmlFor="website-admin"
			>
				Username
			</label>
			<div className="flex">
				<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
					@
				</span>
				<input
					className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					id="website-admin"
					placeholder="elonmusk"
					type="text"
				/>
			</div>
			<label
				className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				htmlFor="search"
			>
				Search
			</label>
			<div className="animate-pulse" role="status">
				<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto" />
				<div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]" />
				<div className="flex items-center justify-center mt-4">
					<svg
						aria-hidden="true"
						className="w-10 h-10 mr-2 text-gray-200 dark:text-gray-700 animate-spin"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clipRule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
							fillRule="evenodd"
						/>
					</svg>
					<div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3" />
					<div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
				</div>
			</div>
		</Wrapper>
	);
}

export default App;
