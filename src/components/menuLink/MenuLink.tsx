import React from 'react';

import './menuLink.css'

const MenuLink: React.FC<{ title: string, active?: boolean, icon: string }> = ({ title, active, icon }) => {
  return (
    <div className="menulink" style={{ borderLeft: `3px solid ${active ? "var(--active-menu)" : "transparent"}` }}>
      <span className='iconify' 
      data-inline="false" 
      data-icon={`mdi-light:${icon}`}
      style={{ color: !active ? "var(--text-color)" : "" }} />
      <h1 className="title" style={{color: active ? "var(--active-menu)" : "#AAA5A5"}}>{title}</h1>
    </div>
  )
};

export default MenuLink;
