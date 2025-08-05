import { default as React } from '../../../../node_modules/react';
export function FileUploader({ onUpload, multiple, accept, maxSizeMB, }: {
    onUpload: any;
    multiple?: boolean;
    accept?: string;
    maxSizeMB?: number;
}): React.JSX.Element;
export default FileUploader;
