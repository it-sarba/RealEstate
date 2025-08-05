import { default as React } from '../../node_modules/react';
export function Header({ user, onLogin, onLogout, onCreateAccount }: {
    user?: any;
    onLogin: any;
    onLogout: any;
    onCreateAccount: any;
}): React.JSX.Element;
export namespace Header {
    namespace propTypes {
        let user: any;
        let onLogin: any;
        let onLogout: any;
        let onCreateAccount: any;
    }
}
