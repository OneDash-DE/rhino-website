import React, { ReactNode } from "react";
import { Dialog } from "onedash-dialog";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface ContentDialogProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

export const ContentDialog = ({ isOpen, onClose, children }: ContentDialogProps) => {
	return (
		<Dialog closeBtn={<span>+</span>} isOpen={isOpen} onClose={onClose}>
			{children}
		</Dialog>
	);
};
