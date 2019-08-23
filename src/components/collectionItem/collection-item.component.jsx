import React from 'react';
import './collection-item.styles.scss';

const Collectionitem = ( { name, imageUrl, price} ) => (
    <div className = "collection-item">
        <div
            className = "image"
            style = {{
                backgroundImage:`url(${imageUrl})`// () must around ${imageUrl}
            }}
        />
        <div className = "collection-footer">
            <span className = "name">{name}</span>
            <span className = "price">{price}</span>
        </div>
    </div>
);

export default Collectionitem;