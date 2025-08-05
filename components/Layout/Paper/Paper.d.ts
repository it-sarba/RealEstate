import { default as React } from '../../../../node_modules/react';
export default Paper;
declare function Paper({ children, elevation, className, ...props }: {
    [x: string]: any;
    children: any;
    elevation: any;
    className: any;
}): React.JSX.Element;
declare namespace Paper {
    namespace propTypes {
        let children: any;
        let elevation: any;
        let className: any;
    }
    namespace defaultProps {
        let elevation_1: number;
        export { elevation_1 as elevation };
    }
}
