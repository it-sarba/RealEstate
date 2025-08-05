import { Tooltip } from './Tooltip';
declare namespace _default {
    export let title: string;
    export { Tooltip as component };
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
export const Top: any;
export const Bottom: any;
export const Left: any;
export const Right: any;
