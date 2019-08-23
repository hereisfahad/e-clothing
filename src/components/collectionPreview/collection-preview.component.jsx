import React from 'react';

import CollectionItem from '../collectionItem/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
  <div className = "collection-preview">
    <h1 className = "title" > {title.toUpperCase()} </h1>
    <div className = "preview" >
        {//filtering first 4 items   
            items.filter((item, index) => index < 4).map( ( { id, ...otherItemProps } ) => 
            <CollectionItem key = {id} {...otherItemProps} />
            )
        };
    </div> 
  </div>
);

export default CollectionPreview;

//always wrap js in brackets while running in jsx