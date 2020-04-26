import shopActionsType from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: shopActionsType.FETCH_COLLECTION_START
});

export const fetchCollectionsFailure = error => ({
  type: shopActionsType.FETCH_COLLECTIONS_FAILURE,
  payload: error
});
export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActionsType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
