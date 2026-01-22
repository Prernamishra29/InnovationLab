import React from 'react';

const SectionTitle = ({ title, subtitle, description, align = 'center' }) => {
  return (
    <div style={{ textAlign: align, marginBottom: '3rem' }}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc" style={align === 'left' ? { margin: '0 0 3rem 0' } : {}}>{description}</p>}
      <div 
        style={{ 
          height: '4px', 
          width: '60px', 
          background: 'var(--gradient-blue)', 
          margin: align === 'center' ? '0 auto' : '0', 
          borderRadius: '2px' 
        }} 
      />
    </div>
  );
};

export default SectionTitle;
