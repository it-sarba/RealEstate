import { default as React } from '../../../../node_modules/react';
export function Pagination({ currentPage, totalPages, onPageChange, }: {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: () => void;
}): React.JSX.Element;
export default Pagination;
