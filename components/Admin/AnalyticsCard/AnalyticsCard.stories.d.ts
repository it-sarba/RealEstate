import { AnalyticsCard } from './AnalyticsCard';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { AnalyticsCard as component };
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
export function Users(): React.JSX.Element;
export function Revenue(): React.JSX.Element;
export function Engagement(): React.JSX.Element;
