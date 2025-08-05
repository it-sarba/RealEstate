import { SkeletonLoader } from './SkeletonLoader';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { SkeletonLoader as component };
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
export function Default(): React.JSX.Element;
export function Text(): React.JSX.Element;
export function Circle(): React.JSX.Element;
export function Rectangles(): React.JSX.Element;
export function Multiple(): React.JSX.Element;
