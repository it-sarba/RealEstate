import { UserAvatarWithStatus } from './UserAvatarWithStatus';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { UserAvatarWithStatus as component };
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
        namespace src {
            let description_1: string;
            export { description_1 as description };
            export namespace control {
                let type: string;
            }
        }
        namespace name {
            let description_2: string;
            export { description_2 as description };
            export namespace control_1 {
                let type_1: string;
                export { type_1 as type };
            }
            export { control_1 as control };
        }
        namespace size {
            let description_3: string;
            export { description_3 as description };
            export namespace control_2 {
                let type_2: string;
                export { type_2 as type };
                export let min: number;
                export let max: number;
                export let step: number;
            }
            export { control_2 as control };
        }
        namespace status {
            let description_4: string;
            export { description_4 as description };
            export namespace control_3 {
                let type_3: string;
                export { type_3 as type };
            }
            export { control_3 as control };
            export let options: string[];
        }
        namespace showTooltip {
            let description_5: string;
            export { description_5 as description };
            export namespace control_4 {
                let type_4: string;
                export { type_4 as type };
            }
            export { control_4 as control };
        }
        namespace onClick {
            let description_6: string;
            export { description_6 as description };
            export let action: string;
        }
        namespace loading {
            let description_7: string;
            export { description_7 as description };
            export namespace control_5 {
                let type_5: string;
                export { type_5 as type };
            }
            export { control_5 as control };
        }
        namespace showBadge {
            let description_8: string;
            export { description_8 as description };
            export namespace control_6 {
                let type_6: string;
                export { type_6 as type };
            }
            export { control_6 as control };
        }
        namespace badgeContent {
            let description_9: string;
            export { description_9 as description };
            export namespace control_7 {
                let type_7: string;
                export { type_7 as type };
            }
            export { control_7 as control };
        }
        namespace variant {
            let description_10: string;
            export { description_10 as description };
            export namespace control_8 {
                let type_8: string;
                export { type_8 as type };
            }
            export { control_8 as control };
            let options_1: string[];
            export { options_1 as options };
        }
        namespace borderColor {
            let description_11: string;
            export { description_11 as description };
            export namespace control_9 {
                let type_9: string;
                export { type_9 as type };
            }
            export { control_9 as control };
        }
        namespace statusPosition {
            let description_12: string;
            export { description_12 as description };
            export namespace control_10 {
                let type_10: string;
                export { type_10 as type };
            }
            export { control_10 as control };
            let options_2: string[];
            export { options_2 as options };
        }
        namespace showStatusText {
            let description_13: string;
            export { description_13 as description };
            export namespace control_11 {
                let type_11: string;
                export { type_11 as type };
            }
            export { control_11 as control };
        }
    }
}
export default _default;
export namespace Default {
    namespace args {
        let name_1: string;
        export { name_1 as name };
        import src_1 = mockAvatars.jane;
        export { src_1 as src };
        let status_1: string;
        export { status_1 as status };
        let size_1: number;
        export { size_1 as size };
        let showTooltip_1: boolean;
        export { showTooltip_1 as showTooltip };
    }
}
export namespace WithoutImage {
    export namespace args_1 {
        let name_2: string;
        export { name_2 as name };
        let status_2: string;
        export { status_2 as status };
        let size_2: number;
        export { size_2 as size };
        let showTooltip_2: boolean;
        export { showTooltip_2 as showTooltip };
    }
    export { args_1 as args };
}
export namespace LargeSize {
    export namespace args_2 {
        let name_3: string;
        export { name_3 as name };
        import src_2 = mockAvatars.alex;
        export { src_2 as src };
        let size_3: number;
        export { size_3 as size };
        let status_3: string;
        export { status_3 as status };
        let showTooltip_3: boolean;
        export { showTooltip_3 as showTooltip };
        let showStatusText_1: boolean;
        export { showStatusText_1 as showStatusText };
    }
    export { args_2 as args };
}
export namespace SmallSize {
    export namespace args_3 {
        let name_4: string;
        export { name_4 as name };
        import src_3 = mockAvatars.mike;
        export { src_3 as src };
        let size_4: number;
        export { size_4 as size };
        let status_4: string;
        export { status_4 as status };
        let showTooltip_4: boolean;
        export { showTooltip_4 as showTooltip };
    }
    export { args_3 as args };
}
export namespace StatusVariants {
    function render(): React.JSX.Element;
}
export namespace ShapeVariants {
    export function render_1(): React.JSX.Element;
    export { render_1 as render };
}
export namespace WithBadge {
    export namespace args_4 {
        let name_5: string;
        export { name_5 as name };
        import src_4 = mockAvatars.sarah;
        export { src_4 as src };
        let status_5: string;
        export { status_5 as status };
        let size_5: number;
        export { size_5 as size };
        let showBadge_1: boolean;
        export { showBadge_1 as showBadge };
        let badgeContent_1: string;
        export { badgeContent_1 as badgeContent };
        let showTooltip_5: boolean;
        export { showTooltip_5 as showTooltip };
    }
    export { args_4 as args };
}
export namespace Loading {
    export namespace args_5 {
        let name_6: string;
        export { name_6 as name };
        let status_6: string;
        export { status_6 as status };
        let size_6: number;
        export { size_6 as size };
        let loading_1: boolean;
        export { loading_1 as loading };
    }
    export { args_5 as args };
}
export namespace Clickable {
    export namespace args_6 {
        let name_7: string;
        export { name_7 as name };
        import src_5 = mockAvatars.john;
        export { src_5 as src };
        let status_7: string;
        export { status_7 as status };
        let size_7: number;
        export { size_7 as size };
        export function onClick_1(): void;
        export { onClick_1 as onClick };
        let showTooltip_6: boolean;
        export { showTooltip_6 as showTooltip };
    }
    export { args_6 as args };
}
export namespace StatusPositions {
    export function render_2(): React.JSX.Element;
    export { render_2 as render };
}
export namespace WithBorders {
    export function render_3(): React.JSX.Element;
    export { render_3 as render };
}
declare namespace mockAvatars {
    let jane: string;
    let john: string;
    let alex: string;
    let mike: string;
    let sarah: string;
}
