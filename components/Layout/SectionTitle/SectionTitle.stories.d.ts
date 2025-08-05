import { default as SectionTitle } from './SectionTitle';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { SectionTitle as component };
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
export function Centered(): React.JSX.Element;
export function Accent(): React.JSX.Element;
export function MutedRight(): React.JSX.Element;
