import React, { useContext } from "react";

import CollectioPreview from "../../components/collectionPreview/collection-preview.component";
import CollectionsContext from "../../context/collections/collections.context";

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    key => collectionsMap[key]
  );
  return (
    <div>
      {//wraping it into brackets to run js in jsx
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectioPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
