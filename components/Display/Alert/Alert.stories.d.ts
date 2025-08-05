import { Alert } from './Alert';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { Alert as component };
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
export function Info(): React.JSX.Element;
export function Success(): React.JSX.Element;
export function Warning(): React.JSX.Element;
export function Error(): React.JSX.Element;
export function Closable(): React.JSX.Element;
