import shopActionsType from './shop.types';

export const updateCollections = (collectionMap) => ({
    type: shopActionsType.UPDATE_COLLECTIONS,
    payload: collectionMap
})