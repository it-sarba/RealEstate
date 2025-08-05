import { default as React } from '../../../node_modules/react';
export function Button({ label, size, variant, disabled, loading, icon, iconPosition, type, onClick, }: {
    label: any;
    size?: string;
    variant?: string;
    disabled?: boolean;
    loading?: boolean;
    icon: any;
    iconPosition?: string;
    type?: string;
    onClick: any;
}): React.JSX.Element;
export namespace Button {
    namespace propTypes {
        let label: any;
        let size: any;
        let variant: any;
        let disabled: any;
        let loading: any;
        let icon: any;
        let iconPosition: any;
        let type: any;
        let onClick: any;
    }
}
export default Button;
