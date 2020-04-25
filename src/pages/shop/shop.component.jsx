import React, { useEffect } from "react";
import { connect } from "react-redux";
// import {
//   selectCollection,
//   selectIsCollectionsLoaded
// } from "../../redux/shop/shop.selectors";
// import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from "../../firebase/firebase.utils";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  // state = {
  //   loading: true
  // };
  // unsubscribeFromSnapshot = null;
    useEffect(() => {
      fetchCollectionsStart();
    },[fetchCollectionsStart]);
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // fetch(
    //   `https://firestore.googleapis.com/v1/projects/crown-db-2e386/databases/(default)/documents/collections`
    // ).then(response => response.json());

    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });


    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  // updateCollections: collectionsMap =>
  //   dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
