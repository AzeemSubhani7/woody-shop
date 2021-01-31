import React from 'react';
import './css/homepage.scss';

function MenuItem({title, imageUrl, size}) {
    return (
        // eslint-disable-next-line no-template-curly-in-string
        <div className={`${size} menu-item`} style= {{
            backgroundImage: `url(${imageUrl})`
        }
        }
        >
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}
export default MenuItem;