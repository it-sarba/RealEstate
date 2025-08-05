import { LogViewer } from './LogViewer';
import { default as React } from '../../../../node_modules/react';
declare namespace _default {
    export let title: string;
    export { LogViewer as component };
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
        namespace logs {
            let description_1: string;
            export { description_1 as description };
            export namespace control {
                let type: string;
            }
        }
        namespace maxHeight {
            let description_2: string;
            export { description_2 as description };
            export namespace control_1 {
                let type_1: string;
                export { type_1 as type };
            }
            export { control_1 as control };
        }
        namespace showTimestamp {
            let description_3: string;
            export { description_3 as description };
            export namespace control_2 {
                let type_2: string;
                export { type_2 as type };
            }
            export { control_2 as control };
        }
        namespace showLevel {
            let description_4: string;
            export { description_4 as description };
            export namespace control_3 {
                let type_3: string;
                export { type_3 as type };
            }
            export { control_3 as control };
        }
        namespace className {
            let description_5: string;
            export { description_5 as description };
            export namespace control_4 {
                let type_4: string;
                export { type_4 as type };
            }
            export { control_4 as control };
        }
        namespace emptyMessage {
            let description_6: string;
            export { description_6 as description };
            export namespace control_5 {
                let type_5: string;
                export { type_5 as type };
            }
            export { control_5 as control };
        }
    }
}
export default _default;
export namespace Default {
    namespace args {
        export { sampleLogs as logs };
        let maxHeight_1: string;
        export { maxHeight_1 as maxHeight };
        let showTimestamp_1: boolean;
        export { showTimestamp_1 as showTimestamp };
        let showLevel_1: boolean;
        export { showLevel_1 as showLevel };
        let className_1: string;
        export { className_1 as className };
        let emptyMessage_1: string;
        export { emptyMessage_1 as emptyMessage };
    }
}
export namespace EmptyState {
    export namespace args_1 {
        let logs_1: any[];
        export { logs_1 as logs };
        let emptyMessage_2: string;
        export { emptyMessage_2 as emptyMessage };
    }
    export { args_1 as args };
}
export namespace WithoutTimestamps {
    export namespace args_2 {
        export { sampleLogs as logs };
        let showTimestamp_2: boolean;
        export { showTimestamp_2 as showTimestamp };
        let showLevel_2: boolean;
        export { showLevel_2 as showLevel };
    }
    export { args_2 as args };
}
export namespace MessagesOnly {
    export namespace args_3 {
        export { sampleLogs as logs };
        let showTimestamp_3: boolean;
        export { showTimestamp_3 as showTimestamp };
        let showLevel_3: boolean;
        export { showLevel_3 as showLevel };
    }
    export { args_3 as args };
}
export namespace ErrorLogs {
    export namespace args_4 {
        export { errorLogs as logs };
        let maxHeight_2: string;
        export { maxHeight_2 as maxHeight };
    }
    export { args_4 as args };
}
export namespace LargeDataset {
    export namespace args_5 {
        export { largeLogs as logs };
        let maxHeight_3: string;
        export { maxHeight_3 as maxHeight };
    }
    export { args_5 as args };
}
export namespace CompactHeight {
    export namespace args_6 {
        let logs_2: {
            timestamp: string;
            level: string;
            message: string;
        }[];
        export { logs_2 as logs };
        let maxHeight_4: string;
        export { maxHeight_4 as maxHeight };
    }
    export { args_6 as args };
}
export namespace InfoOnly {
    export namespace args_7 {
        let logs_3: {
            timestamp: string;
            level: string;
            message: string;
        }[];
        export { logs_3 as logs };
    }
    export { args_7 as args };
}
export namespace DebugLogs {
    export namespace args_8 {
        let logs_4: {
            timestamp: string;
            level: string;
            message: string;
        }[];
        export { logs_4 as logs };
    }
    export { args_8 as args };
}
export namespace CustomStyling {
    export namespace args_9 {
        let logs_5: {
            timestamp: string;
            level: string;
            message: string;
        }[];
        export { logs_5 as logs };
        let className_2: string;
        export { className_2 as className };
        let maxHeight_5: string;
        export { maxHeight_5 as maxHeight };
    }
    export { args_9 as args };
    export let decorators: ((Story: any) => React.JSX.Element)[];
}
declare const sampleLogs: {
    timestamp: string;
    level: string;
    message: string;
}[];
declare const errorLogs: {
    timestamp: string;
    level: string;
    message: string;
}[];
declare const largeLogs: {
    timestamp: string;
    level: string;
    message: string;
}[];
