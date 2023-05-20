import type { Meta, StoryObj } from "@storybook/react";
import FolderView from "../components/folder-view/FolderView";

const meta = {
  title: "Example/FolderView",
  component: FolderView,
  tags: ["autodocs"],
  argTypes: {
    onNodeSelect: { 
      description: "The function to call when a node is selected.",
     },
    viewItems: {
      description: "The items to display in the folder view. It is an recursive object.",
    },
  },
} satisfies Meta<typeof FolderView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   viewItems: [
      {
        folderId: "1",
        label: "Folder 1",
        folderPath: "folder-1",
        folderSubItems: [
          {
            folderId: "1.1",
            label: "Folder 1.1",
            folderPath: "folder-1/folder-1.1",
          },
          {
            folderId: "1.2",
            label: "Folder 1.2",
            folderPath: "folder-1/folder-1.2",
            folderSubItems: [
              {
                folderId: "1.2.1",
                label: "Folder 1.2.1",
                folderPath: "folder-1/folder-1.2/folder-1.2.1",
                folderSubItems: [
                  {
                    folderId: "1.2.1.1",
                    label: "Folder 1.2.1.1",
                    folderPath:
                      "folder-1/folder-1.2/folder-1.2.1/folder-1.2.1.1",
                  },
                  {
                    folderId: "1.2.1.2",
                    label: "Folder 1.2.1.2",
                    folderPath:
                      "folder-1/folder-1.2/folder-1.2.1/folder-1.2.1.2",
                    folderSubItems: [
                      {
                        folderId: "1.2.1.2.1",
                        label: "Folder 1.2.1.2.1",
                        folderPath:
                          "folder-1/folder-1.2/folder-1.2.1/folder-1.2.1.2/folder-1.2.1.2.1",
                      },
                    ],
                  },
                ],
              },
              {
                folderId: "1.2.2",
                label: "Folder 1.2.2",
                folderPath: "folder-1/folder-1.2/folder-1.2.2",
              },
            ],
          },
        ],
      },
   ],
   onNodeSelect(folderId) {
     // eslint-disable-next-line no-alert
     alert(`Selected folderId: ${folderId}`);
   },
  },
};

