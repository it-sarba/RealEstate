import { default as React } from '../../../../node_modules/react';
export function Dialog({ isOpen, onClose, title, description, confirmText, cancelText, onConfirm, }: {
    isOpen: any;
    onClose: any;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: any;
}): React.JSX.Element;
export default Dialog;
