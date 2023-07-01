import React, { useState } from "react";
import { motion } from "framer-motion";
// eslint-disable-next-line import/no-cycle
import { type TreeViewItem } from "./CustomTreeView";
import { ChevronRightIcon } from "../../common/assets/icons/Icons";

function CustomTreeNode({
	item,
	initiallyExpanded = false,
	setSelectedNode,
	selectedNode,
}: {
	item: TreeViewItem;
	initiallyExpanded?: boolean;
	setSelectedNode: React.Dispatch<React.SetStateAction<string | undefined>>;
	selectedNode?: string;
}) {
	const hasSubItems =
		(item?.subItems != null && Object.keys(item.subItems).length > 0) || false;

	const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

	const handleNodeSelect = () => {
		if (hasSubItems) {
			return;
		}

		setSelectedNode(item.nodeId);
	};

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);

		handleNodeSelect();
	};

	if (!hasSubItems) {
		return (
			<div
				aria-hidden="true"
				className={`pl-8 w-full rounded-lg cursor-pointer hover:bg-gray-100 ${
					selectedNode === item.nodeId ? "bg-primary-100" : ""
				} ${!hasSubItems ? "!px-14" : ""}`}
				onClick={handleNodeSelect}
			>
				<label className="cursor-pointer" htmlFor={item.nodeId}>
					{item.label}
				</label>
			</div>
		);
	}

	return (
		<motion.div
			animate={{ height: "auto", opacity: 1 }}
			className="w-full pl-4"
			initial={{ height: 0, opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<div
				aria-hidden="true"
				className={`flex flex-row w-full px-4 rounded-md cursor-pointer gap-x-4 hover:bg-gray-100 ${
					selectedNode === item.nodeId ? "bg-primary-100" : ""
				}`}
				onClick={toggleExpand}
			>
				{hasSubItems && (
					<div className="flex items-center justify-center">
						{isExpanded ? (
							<ChevronRightIcon className="rotate-90" size={12} />
						) : (
							<ChevronRightIcon size={12} />
						)}
					</div>
				)}
        <label className="cursor-pointer" htmlFor={item.nodeId}>
          {item.label}
        </label>
			</div>
			{isExpanded && hasSubItems && (
				<ul className="w-full">
					{Object.values(item.subItems ?? []).map((subItem: TreeViewItem) => (
						<li className="flex w-full py-0.5 gap-x-4" key={subItem.nodeId}>
							<CustomTreeNode
								item={subItem}
								selectedNode={selectedNode}
								setSelectedNode={setSelectedNode}
							/>
						</li>
					))}
				</ul>
			)}
		</motion.div>
	);
}

export default CustomTreeNode;
