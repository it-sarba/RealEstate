import { default as Button } from './Button';
declare namespace _default {
    export let title: string;
    export { Button as component };
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
export const Primary: any;
export const WithLeftIcon: any;
export const WithRightIcon: any;
export const Loading: any;
export const Disabled: any;
export const AllOptions: any;
