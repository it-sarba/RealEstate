import { default as Paper } from './Paper';
declare namespace _default {
    export let title: string;
    export { Paper as component };
    export namespace parameters {
        let layout: string;
    }
    export let tags: string[];
    export namespace argTypes {
        namespace backgroundColor {
            let control: string;
        }
        namespace elevation {
            export namespace control_1 {
                let type: string;
                let min: number;
                let max: number;
            }
            export { control_1 as control };
        }
    }
    export namespace args {
        let onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    }
}
export default _default;
export const Default: any;
export const Elevated: any;
export const NoElevation: any;
