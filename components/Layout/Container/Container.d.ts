import { default as React } from '../../../../node_modules/react';
export default Container;
declare function Container({ children, className, maxWidth, padding, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
    maxWidth?: string;
    padding?: string;
}): React.JSX.Element;
declare namespace Container {
    namespace propTypes {
        let children: any;
        let className: any;
        let maxWidth: any;
        let padding: any;
    }
}
