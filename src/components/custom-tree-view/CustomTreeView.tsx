import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// eslint-disable-next-line import/no-cycle
import TreeNode from "./TreeNode";

export interface TreeViewItem {
  label: string;
  nodeId: string;
  subItems?: TreeViews;
}

export type TreeViews = Record<number, TreeViewItem>;

interface Props {
  treeViewItems: TreeViews;
  onNodeSelect: (nodeId: string) => void;
}

function CustomTreeView({ treeViewItems, onNodeSelect }: Props) {
  const [ selectedNode, setSelectedNode ] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (selectedNode !== undefined) {
       onNodeSelect(selectedNode);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ selectedNode ]);

  return (
    <motion.div
      animate={{ y: 0 }}
      className="flex flex-col max-h-[300px] border rounded-lg overflow-y-auto"
      initial={{ y: "-1vw" }}
      transition={{ stiffness: 250 }}
    >
      {Object.values(treeViewItems).map((item: TreeViewItem) => (
        <TreeNode
          item={item}
          key={item.nodeId}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
        />
      ))}
    </motion.div>
  );
}

export default CustomTreeView;
