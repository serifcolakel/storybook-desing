import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcOpenedFolder, FcFolder } from "react-icons/fc";
import { BsFolderCheck } from "react-icons/bs";
import { type FolderViewItem } from "./FolderView";

function FolderNode({
	item,
	initiallyExpanded = false,
	setSelectedNode,
	selectedNode,
}: {
	item: FolderViewItem;
	initiallyExpanded?: boolean;
	setSelectedNode: React.Dispatch<React.SetStateAction<string | undefined>>;
	selectedNode?: string;
}) {
	// This code checks if the item has any sub items.
	const hasSubItems: boolean =
		(item?.folderSubItems != null &&
			Object.keys(item.folderSubItems).length > 0) ||
		false;

	const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

	// Handle node selection
	const handleNodeSelect = (): void => {
		// Do nothing if the node has sub-items
		if (hasSubItems) {
			return;
		}

		// Set the selected node
		setSelectedNode(item.folderId);
	};

	// Toggle the expand state
	const toggleExpand = (): void => {
		// Toggle the expand state
		setIsExpanded(!isExpanded);

		// Handle node selection
		handleNodeSelect();
	};

	// Determine if the node is selected
	const isSelected: boolean = selectedNode === item.folderId;

	// If the item does not have sub items, then we can
	// remove it from the list. The user has no way to
	// expand the item, so there is no reason to keep
	// it in the list. We can also remove any other
	// items that are not expandable.
	if (!hasSubItems) {
		return (
			<motion.div
				animate={{ opacity: 1 }}
				aria-hidden="true"
				className={`w-full pl-2 flex flex-row gap-x-4 rounded-lg py-2 cursor-pointer hover:bg-gray-100 ${
					isSelected ? "bg-yellow-100" : ""
				} ${!hasSubItems ? "!ml-8" : ""}`}
				initial={{ opacity: 0 }}
				onClick={handleNodeSelect}
				transition={{
					duration: 0.1,
					staggerChildren: 0.1,
					delayChildren: 0.1,
					staggerDirection: 1,
					stiffness: 100,
				}}
			>
				<FcFolder size={24} />
				<label className="cursor-pointer" htmlFor={item.folderId}>
					{item.label}
				</label>
				{isSelected && (
					<motion.div
						animate={{ opacity: 1, y: 0, x: 0 }}
						className="flex items-center justify-center"
						initial={{ opacity: 0, y: -10, x: -10 }}
						transition={{ duration: 0.2 }}
					>
						<BsFolderCheck size={24} />
					</motion.div>
				)}
			</motion.div>
		);
	}

	return (
		<motion.div
			animate={{ height: "auto", opacity: 1 }}
			className="w-full ml-8"
			initial={{ height: 0, opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<div
				aria-hidden="true"
				className={`flex flex-row w-full pl-2 rounded-md py-2 cursor-pointer gap-x-4 hover:bg-gray-100 ${
					isSelected ? "bg-yellow-100" : ""
				}`}
				onClick={toggleExpand}
			>
				{isExpanded ? <FcOpenedFolder size={24} /> : <FcFolder size={24} />}
				<label className="cursor-pointer" htmlFor={item.folderId}>
					{item.label}
				</label>
			</div>
			{isExpanded && hasSubItems && (
				<ul className="w-full">
					{Object.values(item.folderSubItems ?? []).map(
						(subItem: FolderViewItem) => (
							<li className="flex w-full py-0.5 gap-x-4" key={subItem.folderId}>
								<FolderNode
									item={subItem}
									selectedNode={selectedNode}
									setSelectedNode={setSelectedNode}
								/>
							</li>
						),
					)}
				</ul>
			)}
		</motion.div>
	);
}

export default FolderNode;
