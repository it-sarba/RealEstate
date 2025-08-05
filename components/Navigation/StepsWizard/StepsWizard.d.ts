import { default as React } from '../../../../node_modules/react';
export function StepsWizard({ steps, currentStep, onStepClick, }: {
    steps?: any[];
    currentStep?: number;
    onStepClick?: () => void;
}): React.JSX.Element;
export default StepsWizard;
