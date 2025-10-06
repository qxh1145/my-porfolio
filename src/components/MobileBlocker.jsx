import React from 'react';
import './MobileBlocker.css';

const MobileBlocker = ({
  title = 'Open this page on desktop',
  description = 'This experience is optimized for larger screens.'
}) => {
  return (
    <div className="mobile-blocker" aria-live="polite" aria-atomic="true">
      <div className="mobile-blocker__content">
        <div className="mobile-blocker__title">{title}</div>
        <div className="mobile-blocker__desc">{description}</div>
      </div>
    </div>
  );
};

export default MobileBlocker;
