import { default as ActivityFeed } from './ActivityFeed';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { ActivityFeed as component };
    export namespace parameters {
        let layout: string;
        namespace docs {
            namespace description {
                let component: string;
            }
        }
    }
    export let tags: string[];
    export namespace argTypes {
        namespace backgroundColor {
            export let control: string;
            let description_1: string;
            export { description_1 as description };
        }
        namespace variant {
            export namespace control_1 {
                let type: string;
                let options: string[];
            }
            export { control_1 as control };
            let description_2: string;
            export { description_2 as description };
        }
        namespace activities {
            let control_2: string;
            export { control_2 as control };
            let description_3: string;
            export { description_3 as description };
        }
    }
    export namespace args {
        function onClick(): void;
    }
}
export default _default;
export function Default(): React.JSX.Element;
