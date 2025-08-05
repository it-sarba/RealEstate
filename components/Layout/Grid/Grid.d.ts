import { default as React } from '../../../../node_modules/react';
export default Grid;
declare function Grid({ children, gap, align, justify, className }: {
    children: any;
    gap?: string;
    align?: string;
    justify?: string;
    className: any;
}): React.JSX.Element;
declare namespace Grid {
    export { Row };
    export { Col };
    export namespace propTypes {
        let children: any;
        let gap: any;
        let align: any;
        let justify: any;
        let className: any;
    }
}
declare function Row({ children, className, style }: {
    children: any;
    className: any;
    style: any;
}): React.JSX.Element;
declare namespace Row {
    export namespace propTypes_1 {
        let children_1: any;
        export { children_1 as children };
        let className_1: any;
        export { className_1 as className };
        export let style: any;
    }
    export { propTypes_1 as propTypes };
}
declare function Col({ span, offset, children, className, style }: {
    span?: number;
    offset?: number;
    children: any;
    className: any;
    style: any;
}): React.JSX.Element;
declare namespace Col {
    export namespace propTypes_2 {
        export let span: any;
        export let offset: any;
        let children_2: any;
        export { children_2 as children };
        let className_2: any;
        export { className_2 as className };
        let style_1: any;
        export { style_1 as style };
    }
    export { propTypes_2 as propTypes };
}
