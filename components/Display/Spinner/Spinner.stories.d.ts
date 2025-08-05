import { Spinner } from './Spinner';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { Spinner as component };
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
export function Primary(): React.JSX.Element;
export function Sizes(): React.JSX.Element;
export function Colors(): React.JSX.Element;
export function WithLabel(): React.JSX.Element;
