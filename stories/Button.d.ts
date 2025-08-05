import { default as React } from '../../node_modules/react';
export function Button({ primary, backgroundColor, size, label, ...props }: {
    [x: string]: any;
    primary?: boolean;
    backgroundColor?: any;
    size?: string;
    label: any;
}): React.JSX.Element;
export namespace Button {
    namespace propTypes {
        let primary: any;
        let backgroundColor: any;
        let size: any;
        let label: any;
        let onClick: any;
    }
}
