import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    selectShop,
    shop => shop.collections
)

export const selectCollection = collectionURLparam  =>
    createSelector(
        selectShopCollections,
        collections => collections.find( collection => collection.id === collectionURLparam)
)