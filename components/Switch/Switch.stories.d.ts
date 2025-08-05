import { default as Switch } from './Switch';
import { default as React } from '../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { Switch as component };
    export namespace parameters {
        let layout: string;
    }
    export let tags: string[];
    export namespace argTypes {
        namespace backgroundColor {
            let control: string;
        }
        namespace disabled {
            let control_1: string;
            export { control_1 as control };
        }
        namespace label {
            let control_2: string;
            export { control_2 as control };
        }
    }
    export namespace args {
        let onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    }
}
export default _default;
export function Default(args: any): React.JSX.Element;
export namespace Default {
    export namespace args_1 {
        let label_1: string;
        export { label_1 as label };
        let disabled_1: boolean;
        export { disabled_1 as disabled };
    }
    export { args_1 as args };
}
