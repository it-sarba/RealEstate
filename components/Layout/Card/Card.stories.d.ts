import { default as Card } from './Card';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { Card as component };
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
export function Basic(): React.JSX.Element;
export function WithImage(): React.JSX.Element;
export function CustomStyled(): React.JSX.Element;
