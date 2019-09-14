import React from 'react';

import CollectioPreview from '../../components/collectionPreview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop-selector';

import { connect } from 'react-redux';

const ShopPage =({ collections }) => (
            <div>
                {//wraping it into brackets to run js in jsx
                    collections.map( ({id, ...otherCollectionProps}) => (
                        <CollectioPreview  key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
);

const mapStateToProps = (state) =>(
    {
        collections: selectShopCollections(state)
    }
  );

export default connect(mapStateToProps)(ShopPage);