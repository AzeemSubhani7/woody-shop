import React from 'react';
import './css/previrecollection.scss';
import CollectionItem from './collectionitem';

const PreviewCollectin = ( {title, items} ) => {
    //console.log(title);
    console.log(items);
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, index) => index <4 ).map( ({ id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps}/>
                    ))
                }
            </div>
        </div>
    );
}

export default PreviewCollectin; 