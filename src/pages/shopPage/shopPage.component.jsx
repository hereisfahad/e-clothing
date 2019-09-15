import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collectionOverview/collection-overview.component';
import CollectionPage from '../collectionPage/collectionpage.component'; 
//shopPage has access to match, history and location bc it was routed in header component
const ShopPage = ({ match }) => (
        <div>
            <Route exact path={`${match.path}`} component={ CollectionsOverview } />
            <Route path={`${match.path}:collectionId`} component={ CollectionPage } />
        </div>
);

export default ShopPage;