import { DropdownMenu } from './DropdownMenu';
declare namespace _default {
    export let title: string;
    export { DropdownMenu as component };
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
export const Default: any;
