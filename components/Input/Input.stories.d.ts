import { default as Input } from './Input';
import { default as React } from '../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { Input as component };
    export namespace parameters {
        let layout: string;
    }
    export let tags: string[];
    export namespace argTypes {
        namespace backgroundColor {
            let control: string;
        }
    }
    export namespace args {
        let onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
        let label: string;
        let placeholder: string;
    }
}
export default _default;
export function Default(args: any): React.JSX.Element;
export function WithError(args: any): React.JSX.Element;
export namespace WithError {
    export namespace args_1 {
        let error: string;
    }
    export { args_1 as args };
}
export function PasswordType(args: any): React.JSX.Element;
export namespace PasswordType {
    export namespace args_2 {
        let label_1: string;
        export { label_1 as label };
        export let type: string;
        let placeholder_1: string;
        export { placeholder_1 as placeholder };
    }
    export { args_2 as args };
}
