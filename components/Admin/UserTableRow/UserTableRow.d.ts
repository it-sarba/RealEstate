import { default as React } from '../../../../node_modules/react';
export function UserTableRow({ user, onEdit, onDelete, onView, onSelect, isSelected, loading, showActions, showAvatar, showEmail, showRole, showStatus, customActions, className, size }: {
    user: any;
    onEdit: any;
    onDelete: any;
    onView?: any;
    onSelect?: any;
    isSelected?: boolean;
    loading?: boolean;
    showActions?: boolean;
    showAvatar?: boolean;
    showEmail?: boolean;
    showRole?: boolean;
    showStatus?: boolean;
    customActions?: any;
    className?: string;
    size?: string;
}): React.JSX.Element;
export namespace UserTableRow {
    namespace propTypes {
        let user: any;
        let onEdit: any;
        let onDelete: any;
        let onView: any;
        let onSelect: any;
        let isSelected: any;
        let loading: any;
        let showActions: any;
        let showAvatar: any;
        let showEmail: any;
        let showRole: any;
        let showStatus: any;
        let customActions: any;
        let className: any;
        let size: any;
    }
}
export default UserTableRow;
