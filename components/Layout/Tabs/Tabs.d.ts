import { default as React } from '../../../../node_modules/react';
export default Tabs;
declare function Tabs({ tabs, defaultIndex }: {
    tabs: any;
    defaultIndex: any;
}): React.JSX.Element;
declare namespace Tabs {
    namespace propTypes {
        let tabs: any;
        let defaultIndex: any;
    }
    namespace defaultProps {
        let defaultIndex_1: number;
        export { defaultIndex_1 as defaultIndex };
    }
}
