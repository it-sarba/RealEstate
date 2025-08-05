import { default as React } from '../../../../node_modules/react';
export function LogViewer({ logs, maxHeight, showTimestamp, showLevel, className, emptyMessage }: {
    logs?: any[];
    maxHeight?: string;
    showTimestamp?: boolean;
    showLevel?: boolean;
    className?: string;
    emptyMessage?: string;
}): React.JSX.Element;
export namespace LogViewer {
    namespace propTypes {
        let logs: any;
        let maxHeight: any;
        let showTimestamp: any;
        let showLevel: any;
        let className: any;
        let emptyMessage: any;
    }
}
export default LogViewer;
