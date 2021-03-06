import React from 'react';
import './css/menuitem.scss';
import {withRouter} from 'react-router-dom';

function MenuItem({title, imageUrl, size, history, match, linkUrl}) {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style = {{
            backgroundImage: `url(${imageUrl})`,
            height: '100%',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}
export default withRouter(MenuItem);