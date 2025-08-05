import { default as React } from '../../../../node_modules/react';
export function StatWidget({ title, value, icon, trend, color, size, loading, onClick, subtitle, currency, percentage, animated, className }: {
    title: any;
    value: any;
    icon: any;
    trend?: any;
    color?: string;
    size?: string;
    loading?: boolean;
    onClick?: any;
    subtitle?: any;
    currency?: any;
    percentage?: boolean;
    animated?: boolean;
    className?: string;
}): React.JSX.Element;
export namespace StatWidget {
    namespace propTypes {
        let title: any;
        let value: any;
        let icon: any;
        let trend: any;
        let color: any;
        let size: any;
        let loading: any;
        let onClick: any;
        let subtitle: any;
        let currency: any;
        let percentage: any;
        let animated: any;
        let className: any;
    }
}
export default StatWidget;
