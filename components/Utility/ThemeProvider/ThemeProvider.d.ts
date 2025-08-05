import { default as React } from '../../../../node_modules/react';
export function ThemeProvider({ children }: {
    children: any;
}): React.JSX.Element;
export function useTheme(): {
    theme: string;
    toggleTheme: () => void;
};
export default ThemeProvider;
