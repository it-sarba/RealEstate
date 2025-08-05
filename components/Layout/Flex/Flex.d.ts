import { default as React } from '../../../../node_modules/react';
export default Flex;
declare function Flex({ children, direction, wrap, justify, align, gap, className, style, }: {
    children: any;
    direction?: string;
    wrap?: string;
    justify?: string;
    align?: string;
    gap?: string;
    className: any;
    style: any;
}): React.JSX.Element;
declare namespace Flex {
    export { Item };
    export namespace propTypes {
        let children: any;
        let direction: any;
        let wrap: any;
        let justify: any;
        let align: any;
        let gap: any;
        let className: any;
        let style: any;
    }
}
declare function Item({ children, grow, shrink, basis, className, style }: {
    children: any;
    grow?: number;
    shrink?: number;
    basis?: string;
    className: any;
    style: any;
}): React.JSX.Element;
declare namespace Item {
    export namespace propTypes_1 {
        let children_1: any;
        export { children_1 as children };
        export let grow: any;
        export let shrink: any;
        export let basis: any;
        let className_1: any;
        export { className_1 as className };
        let style_1: any;
        export { style_1 as style };
    }
    export { propTypes_1 as propTypes };
}
