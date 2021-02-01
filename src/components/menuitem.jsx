import React from 'react';
import './css/menuitem.scss';

function MenuItem({title, imageUrl, size}) {
    return (
        <div className={`${size} menu-item`} >
        <div className='background-image' style = {{
            backgroundImage: `url(${imageUrl})`,
            height: '100%',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}/>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}
export default MenuItem;