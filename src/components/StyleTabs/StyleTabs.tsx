import type { ArtStyle } from '../../types';
import './StyleTabs.css';

interface StyleTabsProps {
  styles: ArtStyle[];
  activeStyle: ArtStyle;
  onStyleChange: (style: ArtStyle) => void;
}

function StyleTabs({ styles, activeStyle, onStyleChange }: StyleTabsProps) {
  return (
    <div className="style-tabs">
      {styles.map((style) => (
        <button
          key={style}
          className={`style-tab ${style === activeStyle ? 'active' : ''}`}
          onClick={() => onStyleChange(style)}
        >
          {style}
        </button>
      ))}
    </div>
  );
}

export default StyleTabs;
