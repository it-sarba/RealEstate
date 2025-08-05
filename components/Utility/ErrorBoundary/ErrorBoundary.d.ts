import { default as React } from '../../../../node_modules/react';
export class ErrorBoundary extends React.Component<any, any, any> {
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    constructor(props: any);
    state: {
        hasError: boolean;
        error: any;
        errorInfo: any;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    handleReset: () => void;
    render(): any;
}
export default ErrorBoundary;
