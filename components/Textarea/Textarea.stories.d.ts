import { default as Textarea } from './Textarea';
declare namespace _default {
    export let title: string;
    export { Textarea as component };
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
        namespace placeholder {
            let control_2: string;
            export { control_2 as control };
        }
        namespace error {
            let control_3: string;
            export { control_3 as control };
        }
    }
    export namespace args {
        let onChange: import("@vitest/spy").Mock<(...args: any[]) => any>;
    }
}
export default _default;
export const Default: any;
export const WithError: any;
