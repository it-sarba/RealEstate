import { default as Divider } from './Divider';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { Divider as component };
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
export function Horizontal(): React.JSX.Element;
export function WithLabel(): React.JSX.Element;
export function Dashed(): React.JSX.Element;
export function Vertical(): React.JSX.Element;
