import { ForgotPasswordForm } from './ForgotPasswordForm';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { ForgotPasswordForm as component };
    export let tags: string[];
    export namespace parameters {
        let layout: string;
        namespace docs {
            namespace description {
                let component: string;
            }
        }
    }
    export let decorators: ((Story: any) => React.JSX.Element)[];
    export namespace argTypes {
        namespace onReset {
            let action: string;
        }
    }
}
export default _default;
export const Default: any;
export const LoadingState: any;
export const ErrorState: any;
export const SuccessState: any;
