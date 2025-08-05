import { Snackbar } from './Snackbar';
declare namespace _default {
    export let title: string;
    export { Snackbar as component };
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
    }
}
export default _default;
export const Info: any;
export const Success: any;
export const Error: any;
export const Warning: any;
export const CustomDuration: any;
