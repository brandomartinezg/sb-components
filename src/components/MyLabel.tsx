
import './MyLabel.css';

export interface Props{
    /**
    * Is the message to display
    */
    label: string,
    /**
     * Is the message size
     */
    size: 'normal'|'h1'|'h2'|'h3',
    /**
     * Capitalize the text?
     */
    allCaps: boolean,
    /**
     * Label color
     */
    labelColor: 'primary' | 'secondary' | 'tertiary',
    /**
     * Font color
     */
    color?: string
}


export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    allCaps = false,
    labelColor = 'primary',
    color
}: Props) => {
  return (
    <span className={`label ${size} text-${labelColor}`} style={{color}}>
        {allCaps ?  label.toUpperCase() : label}
    </span>
  )
}
