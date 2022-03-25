/// <reference types="react" />
import './MyLabel.css';
export interface Props {
    /**
    * Is the message to display
    */
    label: string;
    /**
     * Is the message size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize the text?
     */
    allCaps: boolean;
    /**
     * Label color
     */
    labelColor: 'primary' | 'secondary' | 'tertiary';
    /**
     * Font color
     */
    color?: string;
    /**
     * backgroundColor
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, labelColor, color, backgroundColor }: Props) => JSX.Element;
