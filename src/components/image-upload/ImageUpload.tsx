/* eslint-disable max-len */
import React, { useRef, useState } from "react";
import Button from "../button/Button";

interface Props {
	onFilesUpload: (files: FileList) => void;
	getManuelData: (state: ImagePreview[]) => void;
}

function PolarStarIcon() {
	return (
		<svg
			height={36}
			viewBox="0 0 512 512"
			width={36}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M255.9 19.77C241.5 109.6 229.4 163 196.2 196.2c-33.2 33.2-86.6 45.3-176.43 59.7C109.6 270.3 163 282.4 196.2 315.7c33.2 33.2 45.3 86.6 59.7 176.5 14.4-89.9 26.5-143.3 59.7-176.6 33.3-33.2 86.7-45.3 176.6-59.7-89.9-14.4-143.3-26.5-176.5-59.7-33.3-33.2-45.4-86.6-59.8-176.43zM423 89c-45.8 33.1-81 56.9-112.4 70.2 5.1 9.4 11 17.4 17.8 24.2 6.8 6.8 14.8 12.7 24.3 17.9 13.4-31.4 37.2-66.6 70.3-112.3zm-333.94.06C122.2 134.8 145.9 169.9 159.2 201.2c9.4-5.1 17.4-11 24.2-17.8 6.8-6.8 12.7-14.8 17.8-24.2-31.3-13.3-66.4-37-112.14-70.14zM352.7 310.5c-9.5 5.2-17.5 11.1-24.3 17.9-6.8 6.8-12.7 14.8-17.9 24.3C342 366 377.2 389.8 423 423c-33.2-45.8-57-81-70.3-112.5zm-193.5.1C145.9 342 122.1 377.2 89 423c45.7-33.1 80.9-56.9 112.3-70.3-5.2-9.5-11.1-17.5-17.9-24.3-6.8-6.8-14.8-12.7-24.2-17.8z"
				fill="currentColor"
			/>
		</svg>
	);
}

function UploadIcon() {
	return (
		<svg
			className="text-violet-500"
			height="84"
			viewBox="0 0 24 24"
			width="84"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="2"
			>
				<path
					d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
					strokeDasharray="2 4"
					strokeDashoffset="6"
				>
					<animate
						attributeName="stroke-dashoffset"
						dur="0.6s"
						repeatCount="indefinite"
						values="6;0"
					/>
				</path>
				<path
					d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
					strokeDasharray="30"
					strokeDashoffset="30"
				>
					<animate
						attributeName="stroke-dashoffset"
						begin="0.1s"
						dur="0.3s"
						fill="freeze"
						values="30;0"
					/>
				</path>
				<path d="M12 16v-7.5" strokeDasharray="10" strokeDashoffset="10">
					<animate
						attributeName="stroke-dashoffset"
						begin="0.5s"
						dur="0.2s"
						fill="freeze"
						values="10;0"
					/>
				</path>
				<path
					d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"
					strokeDasharray="6"
					strokeDashoffset="6"
				>
					<animate
						attributeName="stroke-dashoffset"
						begin="0.7s"
						dur="0.2s"
						fill="freeze"
						values="6;0"
					/>
				</path>
			</g>
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg
			height={24}
			viewBox="0 0 24 24"
			width={24}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.4 19L5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19z"
				fill="currentColor"
			/>
		</svg>
	);
}

interface ImagePreview {
	url: string;
	fileName: string;
	size: string;
}

function ImageUpload({ onFilesUpload, getManuelData }: Props) {
	const [dragging, setDragging] = useState(false);

	const [errorMessage, setErrorMessage] = useState<string | undefined>();

	const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);

	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(true);
	};

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(false);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleValidateFilesType = (files: FileList | null): boolean => {
		const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

		const maxFileSize: number = 5 * 1024 * 1024;

		if (files === null) return false;

		const invalidFiles = Array.from(files).filter(
			(file) => !allowedTypes.includes(file.type) || file.size > maxFileSize,
		);

		if (invalidFiles.length > 0) {
			setErrorMessage(
				"Invalid file type. Please upload only JPEG, PNG, or GIF images.",
			);

			// alert("Invalid file type. Please upload only JPEG, PNG, or GIF images.");

			return false;
		}

		setErrorMessage(undefined);

		return true;
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(false);
		const { files } = e.dataTransfer;

		const isValid = handleValidateFilesType(files);

		if (!isValid) return;

		onFilesUpload(files);
		const previews = Array.from(files).map((file) => ({
			url: URL.createObjectURL(file),
			fileName: file.name,
			size: `${file.size.toString().slice(0, 2)} KB`,
		}));

		setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;

		if (files !== null) {
			const isValid = handleValidateFilesType(files);

			if (!isValid) return;

			onFilesUpload(files);
			const previews = Array.from(files).map((file) => ({
				url: URL.createObjectURL(file),
				fileName: file.name,
				size: `${file.size.toString().slice(0, 2)} KB`,
			}));

			setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
		}
	};

	const handleRemoveAllImages = () => {
		setImagePreviews([]);
	};

	const handleOpenFileInput = () => fileInputRef.current?.click();

	const handleRemoveImage = (url: string) => () => {
		setImagePreviews((prevPreviews) =>
			prevPreviews.filter((prev) => prev.url !== url),
		);
	};

	const handleSendImages = () => {
		getManuelData(imagePreviews);
	};

	return (
		<div className="flex flex-col items-center justify-center w-full py-4 bg-white rounded-lg shadow-xl gap-y-4">
			<div className="flex flex-row justify-between w-11/12 text-left">
				<article>
					<h1 className="text-lg font-bold">Upload and attach images</h1>
					<span className="text-xs text-gray-400">
						Upload and attach files. You can upload multiple files.
					</span>
				</article>
				<PolarStarIcon />
			</div>
			<div
				aria-hidden="true"
				className={`flex flex-col items-center justify-center w-11/12 p-8 text-sm border-2 border-dashed border-violet-500 rounded-xl cursor-pointer hover:bg-gray-100 ${
					dragging
						? "bg-violet-50 border-violet-700 border-4 scale-x-105 -translate-y-1"
						: "bg-gray-50"
				}`}
				onClick={handleOpenFileInput}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				role="button"
				tabIndex={-1}
			>
				<input
					multiple
					accept="image/*"
					onChange={handleInputChange}
					ref={fileInputRef}
					style={{ display: "none" }}
					type="file"
				/>
				<UploadIcon />
				<p>
					<b className="text-base underline">Click to upload</b> or drag and
					drop
				</p>
				<em className="pt-2 text-xs text-gray-500">
					{dragging ? "Drop here" : "Supports JPG, PNG, GIF up to 10MB"}
				</em>
			</div>
			{errorMessage !== undefined ? (
				<p className="px-4 py-2 text-sm text-red-600 bg-red-200 rounded-lg">
					{errorMessage}
				</p>
			) : (
				imagePreviews.length > 0 && (
					<div className="flex flex-col items-center w-full gap-y-4">
						{imagePreviews.map((preview, index) => (
							<div
								className="relative flex flex-row w-11/12 h-32 py-3 space-x-4 border rounded-lg shadow-lg gap-x-4 hover:border-black hover:shadow-xl"
								key={preview.url}
							>
								<button
									className="absolute cursor-pointer flex items-center justify-center w-10 h-10 border border-[#eee] rounded-lg right-4 top-4"
									onClick={handleRemoveImage(preview.url)}
									tabIndex={index === 0 ? index + 2 : index + 1}
									type="button"
								>
									<CloseIcon />
								</button>
								<div className="p-2 rounded-lg shadow-lg">
									<img
										alt="Preview"
										className="object-contain w-full h-full aspect-video"
										src={preview.url}
									/>
								</div>
								<article className="pt-2 space-y-2">
									<h1 className="text-lg font-bold"> {preview.fileName}</h1>
									<span className="text-xs text-gray-400">
										Image size {preview.size}.
									</span>
								</article>
							</div>
						))}
					</div>
				)
			)}
			<div className="flex flex-row gap-x-4">
				<Button
					buttonType="outline"
					disabled={imagePreviews.length === 0}
					onClick={handleRemoveAllImages}
				>
					Cancel
				</Button>
				<Button
					disabled={imagePreviews.length === 0}
					onClick={handleSendImages}
				>
					Attach Images
				</Button>
			</div>
		</div>
	);
}

export default ImageUpload;
