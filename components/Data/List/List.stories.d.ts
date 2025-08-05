import { List } from './List';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { List as component };
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
export function Unordered(): React.JSX.Element;
export function Ordered(): React.JSX.Element;
export function WithIcons(): React.JSX.Element;
export function CustomRender(): React.JSX.Element;
