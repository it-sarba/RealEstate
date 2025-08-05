import { StatWidget } from './StatWidget';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { StatWidget as component };
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
        export namespace title_1 {
            let description_1: string;
            export { description_1 as description };
            export namespace control {
                let type: string;
            }
        }
        export { title_1 as title };
        export namespace value {
            let description_2: string;
            export { description_2 as description };
            export namespace control_1 {
                let type_1: string;
                export { type_1 as type };
            }
            export { control_1 as control };
        }
        export namespace icon {
            let description_3: string;
            export { description_3 as description };
            let control_2: boolean;
            export { control_2 as control };
        }
        export namespace trend {
            let description_4: string;
            export { description_4 as description };
            export namespace control_3 {
                let type_2: string;
                export { type_2 as type };
            }
            export { control_3 as control };
        }
        export namespace color {
            let description_5: string;
            export { description_5 as description };
            export namespace control_4 {
                let type_3: string;
                export { type_3 as type };
            }
            export { control_4 as control };
            export let options: string[];
        }
        export namespace size {
            let description_6: string;
            export { description_6 as description };
            export namespace control_5 {
                let type_4: string;
                export { type_4 as type };
            }
            export { control_5 as control };
            let options_1: string[];
            export { options_1 as options };
        }
        export namespace loading {
            let description_7: string;
            export { description_7 as description };
            export namespace control_6 {
                let type_5: string;
                export { type_5 as type };
            }
            export { control_6 as control };
        }
        export namespace onClick {
            let description_8: string;
            export { description_8 as description };
            export let action: string;
        }
        export namespace subtitle {
            let description_9: string;
            export { description_9 as description };
            export namespace control_7 {
                let type_6: string;
                export { type_6 as type };
            }
            export { control_7 as control };
        }
        export namespace currency {
            let description_10: string;
            export { description_10 as description };
            export namespace control_8 {
                let type_7: string;
                export { type_7 as type };
            }
            export { control_8 as control };
        }
        export namespace percentage {
            let description_11: string;
            export { description_11 as description };
            export namespace control_9 {
                let type_8: string;
                export { type_8 as type };
            }
            export { control_9 as control };
        }
        export namespace animated {
            let description_12: string;
            export { description_12 as description };
            export namespace control_10 {
                let type_9: string;
                export { type_9 as type };
            }
            export { control_10 as control };
        }
    }
}
export default _default;
export namespace Default {
    namespace args {
        let title_2: string;
        export { title_2 as title };
        let value_1: string;
        export { value_1 as value };
        let icon_1: React.JSX.Element;
        export { icon_1 as icon };
        export namespace trend_1 {
            let direction: string;
            let amount: string;
        }
        export { trend_1 as trend };
        let color_1: string;
        export { color_1 as color };
    }
}
export namespace Revenue {
    export namespace args_1 {
        let title_3: string;
        export { title_3 as title };
        let value_2: string;
        export { value_2 as value };
        let currency_1: string;
        export { currency_1 as currency };
        let icon_2: React.JSX.Element;
        export { icon_2 as icon };
        export namespace trend_2 {
            let direction_1: string;
            export { direction_1 as direction };
            let amount_1: string;
            export { amount_1 as amount };
            export let label: string;
        }
        export { trend_2 as trend };
        let color_2: string;
        export { color_2 as color };
        let subtitle_1: string;
        export { subtitle_1 as subtitle };
    }
    export { args_1 as args };
}
export namespace Orders {
    export namespace args_2 {
        let title_4: string;
        export { title_4 as title };
        let value_3: string;
        export { value_3 as value };
        let icon_3: React.JSX.Element;
        export { icon_3 as icon };
        export namespace trend_3 {
            let direction_2: string;
            export { direction_2 as direction };
            let amount_2: string;
            export { amount_2 as amount };
        }
        export { trend_3 as trend };
        let color_3: string;
        export { color_3 as color };
    }
    export { args_2 as args };
}
export namespace Warnings {
    export namespace args_3 {
        let title_5: string;
        export { title_5 as title };
        let value_4: string;
        export { value_4 as value };
        let icon_4: React.JSX.Element;
        export { icon_4 as icon };
        export namespace trend_4 {
            let direction_3: string;
            export { direction_3 as direction };
            let amount_3: string;
            export { amount_3 as amount };
        }
        export { trend_4 as trend };
        let color_4: string;
        export { color_4 as color };
        let subtitle_2: string;
        export { subtitle_2 as subtitle };
    }
    export { args_3 as args };
}
export namespace Errors {
    export namespace args_4 {
        let title_6: string;
        export { title_6 as title };
        let value_5: string;
        export { value_5 as value };
        let icon_5: React.JSX.Element;
        export { icon_5 as icon };
        export namespace trend_5 {
            let direction_4: string;
            export { direction_4 as direction };
            let amount_4: string;
            export { amount_4 as amount };
        }
        export { trend_5 as trend };
        let color_5: string;
        export { color_5 as color };
        let subtitle_3: string;
        export { subtitle_3 as subtitle };
    }
    export { args_4 as args };
}
export namespace SmallSize {
    export namespace args_5 {
        let title_7: string;
        export { title_7 as title };
        let value_6: string;
        export { value_6 as value };
        let icon_6: React.JSX.Element;
        export { icon_6 as icon };
        export namespace trend_6 {
            let direction_5: string;
            export { direction_5 as direction };
            let amount_5: string;
            export { amount_5 as amount };
        }
        export { trend_6 as trend };
        let color_6: string;
        export { color_6 as color };
        let size_1: string;
        export { size_1 as size };
    }
    export { args_5 as args };
}
export namespace LargeSize {
    export namespace args_6 {
        let title_8: string;
        export { title_8 as title };
        let value_7: string;
        export { value_7 as value };
        let currency_2: string;
        export { currency_2 as currency };
        let icon_7: React.JSX.Element;
        export { icon_7 as icon };
        export namespace trend_7 {
            let direction_6: string;
            export { direction_6 as direction };
            let amount_6: string;
            export { amount_6 as amount };
        }
        export { trend_7 as trend };
        let color_7: string;
        export { color_7 as color };
        let size_2: string;
        export { size_2 as size };
        let subtitle_4: string;
        export { subtitle_4 as subtitle };
    }
    export { args_6 as args };
}
export namespace Loading {
    export namespace args_7 {
        let title_9: string;
        export { title_9 as title };
        let value_8: string;
        export { value_8 as value };
        let icon_8: React.JSX.Element;
        export { icon_8 as icon };
        let color_8: string;
        export { color_8 as color };
        let loading_1: boolean;
        export { loading_1 as loading };
    }
    export { args_7 as args };
}
export namespace NoTrend {
    export namespace args_8 {
        let title_10: string;
        export { title_10 as title };
        let value_9: string;
        export { value_9 as value };
        let percentage_1: boolean;
        export { percentage_1 as percentage };
        let icon_9: React.JSX.Element;
        export { icon_9 as icon };
        let color_9: string;
        export { color_9 as color };
        let subtitle_5: string;
        export { subtitle_5 as subtitle };
    }
    export { args_8 as args };
}
export namespace Clickable {
    export namespace args_9 {
        let title_11: string;
        export { title_11 as title };
        let value_10: string;
        export { value_10 as value };
        let icon_10: React.JSX.Element;
        export { icon_10 as icon };
        export namespace trend_8 {
            let direction_7: string;
            export { direction_7 as direction };
            let amount_7: string;
            export { amount_7 as amount };
        }
        export { trend_8 as trend };
        let color_10: string;
        export { color_10 as color };
        export function onClick_1(e: any): void;
        export { onClick_1 as onClick };
    }
    export { args_9 as args };
}
export namespace InfoTheme {
    export namespace args_10 {
        let title_12: string;
        export { title_12 as title };
        let value_11: string;
        export { value_11 as value };
        let icon_11: React.JSX.Element;
        export { icon_11 as icon };
        export namespace trend_9 {
            let direction_8: string;
            export { direction_8 as direction };
            let amount_8: string;
            export { amount_8 as amount };
        }
        export { trend_9 as trend };
        let color_11: string;
        export { color_11 as color };
        let subtitle_6: string;
        export { subtitle_6 as subtitle };
    }
    export { args_10 as args };
}
export namespace NeutralTheme {
    export namespace args_11 {
        let title_13: string;
        export { title_13 as title };
        let value_12: string;
        export { value_12 as value };
        let icon_12: React.JSX.Element;
        export { icon_12 as icon };
        let color_12: string;
        export { color_12 as color };
        let subtitle_7: string;
        export { subtitle_7 as subtitle };
    }
    export { args_11 as args };
}
export namespace PercentageValue {
    export namespace args_12 {
        let title_14: string;
        export { title_14 as title };
        let value_13: string;
        export { value_13 as value };
        let percentage_2: boolean;
        export { percentage_2 as percentage };
        let icon_13: React.JSX.Element;
        export { icon_13 as icon };
        export namespace trend_10 {
            let direction_9: string;
            export { direction_9 as direction };
            let amount_9: string;
            export { amount_9 as amount };
        }
        export { trend_10 as trend };
        let color_13: string;
        export { color_13 as color };
    }
    export { args_12 as args };
}
export namespace DashboardGrid {
    export function render(): React.JSX.Element;
    export namespace parameters_1 {
        let layout_1: string;
        export { layout_1 as layout };
        export namespace docs_1 {
            namespace source {
                let code: string;
            }
        }
        export { docs_1 as docs };
    }
    export { parameters_1 as parameters };
}
export namespace InteractiveExample {
    export function render_1(): React.JSX.Element;
    export { render_1 as render };
}
