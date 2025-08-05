import { Header } from './Header';
declare namespace _default {
    export let title: string;
    export { Header as component };
    export let tags: string[];
    export namespace parameters {
        let layout: string;
    }
    export namespace args {
        let onLogin: import("@vitest/spy").Mock<(...args: any[]) => any>;
        let onLogout: import("@vitest/spy").Mock<(...args: any[]) => any>;
        let onCreateAccount: import("@vitest/spy").Mock<(...args: any[]) => any>;
    }
}
export default _default;
export namespace LoggedIn {
    export namespace args_1 {
        namespace user {
            let name: string;
        }
    }
    export { args_1 as args };
}
export const LoggedOut: {};
