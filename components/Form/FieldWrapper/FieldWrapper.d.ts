import { default as React } from '../../../../node_modules/react';
export default FieldWrapper;
declare function FieldWrapper({ label, children, error, required, className }: {
    label: any;
    children: any;
    error: any;
    required: any;
    className?: string;
}): React.JSX.Element;
declare namespace FieldWrapper {
    namespace propTypes {
        let label: any;
        let error: any;
        let required: any;
        let children: any;
        let className: any;
    }
}
