import React, { useContext } from "react";

import Collectionitem from "../../components/collectionItem/collection-item.component";
import CollectionContext from "../../context/collections/collections.context";

import "./collectionpage.styles.scss";

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title"> {title} </h2>
      <div className="items">
        {items.map(item => (
          <Collectionitem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
