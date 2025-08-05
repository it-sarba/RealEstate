import { default as React } from '../../../../node_modules/react';
export default Card;
declare function Card({ title, content, image, actions, className }: {
    title: any;
    content: any;
    image: any;
    actions: any;
    className: any;
}): React.JSX.Element;
declare namespace Card {
    namespace propTypes {
        let title: any;
        let content: any;
        let image: any;
        let actions: any;
        let className: any;
    }
    namespace defaultProps {
        let className_1: string;
        export { className_1 as className };
    }
}
