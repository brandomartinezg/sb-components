import { jsx as _jsx } from "react/jsx-runtime";
import './MyLabel.css';
export const MyLabel = ({ label = 'No label', size = 'normal', allCaps = false, labelColor = 'primary', color, backgroundColor = 'transparent' }) => {
    return (_jsx("span", Object.assign({ className: `label ${size} text-${labelColor}`, style: { color, backgroundColor } }, { children: allCaps ? label.toUpperCase() : label })));
};
