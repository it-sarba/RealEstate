import { SocialLoginButton } from './SocialLoginButton';
declare namespace _default {
    export let title: string;
    export { SocialLoginButton as component };
    export namespace parameters {
        let layout: string;
    }
    export let tags: string[];
    export namespace argTypes {
        namespace backgroundColor {
            let control: string;
        }
        namespace provider {
            let control_1: string;
            export { control_1 as control };
            export let options: string[];
        }
    }
    export namespace args {
        let onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    }
}
export default _default;
export const Google: any;
export const Facebook: any;
export const GitHub: any;
