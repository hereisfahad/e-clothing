import React from 'react';
import SHOP_DATA from './ShopData';
import CollectioPreview from '../../components/collectionPreview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections:SHOP_DATA
        };
    }
    render(){
        const {collections} = this.state; //wrap collections into brackets
        return(
            <div>
                {//wraping it into brackets to run js in jsx
                    collections.map( ({id, ...otherCollectionProps}) => (
                        <CollectioPreview  key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;