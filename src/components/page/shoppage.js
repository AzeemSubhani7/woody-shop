import React from 'react';
import SHOP_DATA from './shopdata'
import PreviewCollectin from './../previewcollection';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collection: SHOP_DATA
        }
    }
    render(){
        const {collection} = this.state;
        return(
            <div className="shop-page">
                {
                    collection.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollectin key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;