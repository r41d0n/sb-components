import './MyLabel.css';
interface MyLabelProps {
    /**
     * Text to display.
     */
    label: string;
    /**
     * Label size.
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalize all letters
     */
    allCaps?: boolean;
    /**
     * Label Colors
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     * Font color
     */
    fontColor?: string;
}
export const MyLabel = ({
    label,
    allCaps = false,
    size = 'normal',
    color = 'text-primary',
    fontColor
}: MyLabelProps) => {
    return (
        <span className={`label ${size} ${color}`} style={{color: fontColor}}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}

