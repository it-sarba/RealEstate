import { LoginForm } from './LoginForm';
declare namespace _default {
    export let title: string;
    export { LoginForm as component };
    export let tags: string[];
    export namespace parameters {
        let layout: string;
        namespace docs {
            let autodocs: boolean;
            namespace description {
                let component: string;
            }
            namespace source {
                let type: string;
            }
        }
    }
    export namespace argTypes {
        namespace onLogin {
            let description_1: string;
            export { description_1 as description };
            export let control: boolean;
            export let action: string;
        }
    }
}
export default _default;
export const Default: any;
export const ValidationError: any;
