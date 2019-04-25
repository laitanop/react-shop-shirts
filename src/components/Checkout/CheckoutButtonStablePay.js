import React, { Component } from "react";
import { connect } from "react-redux";

import Loading from "../global/Loading";

import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_END } from "../../ducks/products";
import { FETCH_CART_START, FETCH_CART_END } from "../../ducks/cart";

var api = require("../../moltin.js");

function mapStateToProps(state) {
  return state;
}

class CheckoutButtonStablePay extends Component {
  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {
    // check if we already have a moltin products in the store
    if (this.props.products.fetched === false) {
      // dispatch an action to our redux reducers
      this.props.dispatch(dispatch => {
        // this action will set a fetching field to true
        dispatch({ type: FETCH_PRODUCTS_START });

        // get the moltin products from the API
        api
          .GetProducts()

          .then(products => {
            /* now that we have the products, this action will set fetching to false and fetched to true,
            as well as add the moltin products to the store */
            dispatch({
              type: FETCH_PRODUCTS_END,
              payload: products
            });
          });
      });
    }

    if (this.props.cart.fetched === false) {
      this.props.dispatch(dispatch => {
        dispatch({ type: FETCH_CART_START });

        api
          .GetCartItems()

          .then(cart => {
            dispatch({ type: FETCH_CART_END, payload: cart });
          });
      });
    }
  }

  render() {
    const { WidgetButton } = window.StablePay;
    if (
      this.props.cart.fetched === true &&
      this.props.products.fetched === true
    ) {
      var tax =
        this.props.cart.cart.meta.display_price.with_tax.amount -
        this.props.cart.cart.meta.display_price.without_tax.amount;

      return (
        <WidgetButton
          {...{
            type: "Payment",
            source: {
              name: "I love shirts",
              address: "0x8b59ae6ec3Ef31c796600373a0Add1d91bD1c00e"
            },
            amount: {
              total:
                this.props.cart.cart.meta.display_price.without_tax.amount / 100
            },
            callbackURL: "https://stablepay.io/success",
            theme: "colored"
          }}
        />
      );
    }

    return (
      <div className="checkout-summary">
        <Loading />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CheckoutButtonStablePay);
