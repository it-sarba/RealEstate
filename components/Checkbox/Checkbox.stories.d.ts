import { default as Checkbox } from './Checkbox';
declare namespace _default {
    export let title: string;
    export { Checkbox as component };
    export namespace parameters {
        let layout: string;
    }
    export let tags: string[];
    export namespace argTypes {
        namespace backgroundColor {
            let control: string;
        }
        namespace label {
            let control_1: string;
            export { control_1 as control };
        }
        namespace error {
            let control_2: string;
            export { control_2 as control };
        }
    }
    export namespace args {
        let onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    }
}
export default _default;
export const Default: any;
export const WithError: any;
