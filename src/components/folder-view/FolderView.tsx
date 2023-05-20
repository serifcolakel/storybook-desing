import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FolderNode from "./FolderNode";

export interface FolderViewItem {
  label: string;
  folderId: string;
  folderPath: string;
  folderSubItems?: FolderViews;
}

export type FolderViews = Record<number, FolderViewItem>;

interface Props {
  /**
   * @description The items to display in the tree view.
   * @type {TreeViews}
   * @memberof CustomFolderView
   */
  viewItems: FolderViews;
  /**
   * @description The function to call when a node is selected.
   * @param folderId The id of the folder that was selected.
   * @memberof CustomFolderView
   * @returns void
   */
  onNodeSelect: (folderId: string) => void;
}

function FolderView({ viewItems, onNodeSelect }: Props) {
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
      initial={{ y: "-1vw" }}
      transition={{ stiffness: 250 }}
    >
      {Object.values(viewItems).map((item: FolderViewItem) => (
        <FolderNode
          item={item}
          key={item.folderId}
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
        />
      ))}
    </motion.div>
  );
}

export default FolderView;
