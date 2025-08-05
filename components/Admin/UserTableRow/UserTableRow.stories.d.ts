import { UserTableRow } from './UserTableRow';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { UserTableRow as component };
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
        namespace user {
            let description_1: string;
            export { description_1 as description };
            export namespace control {
                let type: string;
            }
        }
        namespace onEdit {
            let description_2: string;
            export { description_2 as description };
            export let action: string;
        }
        namespace onDelete {
            let description_3: string;
            export { description_3 as description };
            let action_1: string;
            export { action_1 as action };
        }
        namespace onView {
            let description_4: string;
            export { description_4 as description };
            let action_2: string;
            export { action_2 as action };
        }
        namespace onSelect {
            let description_5: string;
            export { description_5 as description };
            let action_3: string;
            export { action_3 as action };
        }
        namespace isSelected {
            let description_6: string;
            export { description_6 as description };
            export namespace control_1 {
                let type_1: string;
                export { type_1 as type };
            }
            export { control_1 as control };
        }
        namespace loading {
            let description_7: string;
            export { description_7 as description };
            export namespace control_2 {
                let type_2: string;
                export { type_2 as type };
            }
            export { control_2 as control };
        }
        namespace showActions {
            let description_8: string;
            export { description_8 as description };
            export namespace control_3 {
                let type_3: string;
                export { type_3 as type };
            }
            export { control_3 as control };
        }
        namespace showAvatar {
            let description_9: string;
            export { description_9 as description };
            export namespace control_4 {
                let type_4: string;
                export { type_4 as type };
            }
            export { control_4 as control };
        }
        namespace showEmail {
            let description_10: string;
            export { description_10 as description };
            export namespace control_5 {
                let type_5: string;
                export { type_5 as type };
            }
            export { control_5 as control };
        }
        namespace showRole {
            let description_11: string;
            export { description_11 as description };
            export namespace control_6 {
                let type_6: string;
                export { type_6 as type };
            }
            export { control_6 as control };
        }
        namespace showStatus {
            let description_12: string;
            export { description_12 as description };
            export namespace control_7 {
                let type_7: string;
                export { type_7 as type };
            }
            export { control_7 as control };
        }
        namespace size {
            let description_13: string;
            export { description_13 as description };
            export namespace control_8 {
                let type_8: string;
                export { type_8 as type };
            }
            export { control_8 as control };
            export let options: string[];
        }
    }
    export let decorators: ((Story: any) => React.JSX.Element)[];
}
export default _default;
export namespace Default {
    namespace args {
        import user_1 = mockUsers.admin;
        export { user_1 as user };
        let showActions_1: boolean;
        export { showActions_1 as showActions };
        let showAvatar_1: boolean;
        export { showAvatar_1 as showAvatar };
        let showEmail_1: boolean;
        export { showEmail_1 as showEmail };
        let showRole_1: boolean;
        export { showRole_1 as showRole };
        let showStatus_1: boolean;
        export { showStatus_1 as showStatus };
        let size_1: string;
        export { size_1 as size };
    }
}
export namespace RegularUser {
    export namespace args_1 {
        import user_2 = mockUsers.user;
        export { user_2 as user };
        let showActions_2: boolean;
        export { showActions_2 as showActions };
    }
    export { args_1 as args };
}
export namespace WithoutAvatar {
    export namespace args_2 {
        import user_3 = mockUsers.suspended;
        export { user_3 as user };
        let showActions_3: boolean;
        export { showActions_3 as showActions };
    }
    export { args_2 as args };
}
export namespace StatusVariants {
    function render(): React.JSX.Element;
}
export namespace RoleVariants {
    export function render_1(): React.JSX.Element;
    export { render_1 as render };
}
export namespace Loading {
    export namespace args_3 {
        import user_4 = mockUsers.admin;
        export { user_4 as user };
        let loading_1: boolean;
        export { loading_1 as loading };
        let showActions_4: boolean;
        export { showActions_4 as showActions };
    }
    export { args_3 as args };
}
export namespace Selected {
    export namespace args_4 {
        import user_5 = mockUsers.admin;
        export { user_5 as user };
        let isSelected_1: boolean;
        export { isSelected_1 as isSelected };
        export function onSelect_1(): void;
        export { onSelect_1 as onSelect };
        let showActions_5: boolean;
        export { showActions_5 as showActions };
    }
    export { args_4 as args };
}
export namespace WithSelection {
    export namespace args_5 {
        import user_6 = mockUsers.user;
        export { user_6 as user };
        export function onSelect_2(): void;
        export { onSelect_2 as onSelect };
        let isSelected_2: boolean;
        export { isSelected_2 as isSelected };
        let showActions_6: boolean;
        export { showActions_6 as showActions };
    }
    export { args_5 as args };
}
export namespace SmallSize {
    export namespace args_6 {
        import user_7 = mockUsers.admin;
        export { user_7 as user };
        let size_2: string;
        export { size_2 as size };
        let showActions_7: boolean;
        export { showActions_7 as showActions };
    }
    export { args_6 as args };
}
export namespace LargeSize {
    export namespace args_7 {
        import user_8 = mockUsers.admin;
        export { user_8 as user };
        let size_3: string;
        export { size_3 as size };
        let showActions_8: boolean;
        export { showActions_8 as showActions };
    }
    export { args_7 as args };
}
export namespace WithoutActions {
    export namespace args_8 {
        import user_9 = mockUsers.user;
        export { user_9 as user };
        let showActions_9: boolean;
        export { showActions_9 as showActions };
    }
    export { args_8 as args };
}
export namespace CustomActions {
    export namespace args_9 {
        import user_10 = mockUsers.admin;
        export { user_10 as user };
        let showActions_10: boolean;
        export { showActions_10 as showActions };
        export let customActions: React.JSX.Element;
    }
    export { args_9 as args };
}
export namespace InteractiveExample {
    export function render_2(): React.JSX.Element;
    export { render_2 as render };
}
export namespace FullUserTable {
    export function render_3(): React.JSX.Element;
    export { render_3 as render };
    export namespace parameters_1 {
        export namespace docs_1 {
            namespace source {
                let code: string;
            }
        }
        export { docs_1 as docs };
    }
    export { parameters_1 as parameters };
}
export namespace BrokenImage {
    export namespace args_10 {
        export namespace user_11 {
            let avatar: string;
            let id: number;
            let name: string;
            let email: string;
            let role: string;
            let status: string;
            let lastActive: string;
            let department: string;
            let joinDate: string;
        }
        export { user_11 as user };
        let showActions_11: boolean;
        export { showActions_11 as showActions };
    }
    export { args_10 as args };
}
declare namespace mockUsers {
    export namespace admin {
        let avatar_1: string;
        export { avatar_1 as avatar };
    }
    export namespace user_12 {
        let id_1: number;
        export { id_1 as id };
        let name_1: string;
        export { name_1 as name };
        let email_1: string;
        export { email_1 as email };
        let avatar_2: string;
        export { avatar_2 as avatar };
        let role_1: string;
        export { role_1 as role };
        let status_1: string;
        export { status_1 as status };
        let lastActive_1: string;
        export { lastActive_1 as lastActive };
        let department_1: string;
        export { department_1 as department };
        let joinDate_1: string;
        export { joinDate_1 as joinDate };
    }
    export { user_12 as user };
    export namespace moderator {
        let id_2: number;
        export { id_2 as id };
        let name_2: string;
        export { name_2 as name };
        let email_2: string;
        export { email_2 as email };
        let avatar_3: string;
        export { avatar_3 as avatar };
        let role_2: string;
        export { role_2 as role };
        let status_2: string;
        export { status_2 as status };
        let lastActive_2: string;
        export { lastActive_2 as lastActive };
        let department_2: string;
        export { department_2 as department };
    }
    export namespace suspended {
        let id_3: number;
        export { id_3 as id };
        let name_3: string;
        export { name_3 as name };
        let email_3: string;
        export { email_3 as email };
        let role_3: string;
        export { role_3 as role };
        let status_3: string;
        export { status_3 as status };
        let lastActive_3: string;
        export { lastActive_3 as lastActive };
        let department_3: string;
        export { department_3 as department };
    }
    export namespace pending {
        let id_4: number;
        export { id_4 as id };
        let name_4: string;
        export { name_4 as name };
        let email_4: string;
        export { email_4 as email };
        let avatar_4: string;
        export { avatar_4 as avatar };
        let role_4: string;
        export { role_4 as role };
        let status_4: string;
        export { status_4 as status };
        let lastActive_4: string;
        export { lastActive_4 as lastActive };
        let department_4: string;
        export { department_4 as department };
    }
}
