import { default as React } from '../../../../node_modules/react';
export default Accordion;
declare function Accordion({ title, children, defaultOpen }: {
    title: any;
    children: any;
    defaultOpen: any;
}): React.JSX.Element;
declare namespace Accordion {
    namespace propTypes {
        let title: any;
        let children: any;
        let defaultOpen: any;
    }
    namespace defaultProps {
        let defaultOpen_1: boolean;
        export { defaultOpen_1 as defaultOpen };
    }
}
