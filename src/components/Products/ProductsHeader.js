import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartCounter from "../Cart/CartCounter";

class ProductsHeader extends Component {
  render() {
    return (
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">
            <Link to="/products">Products</Link>
            <Link to="/styles">Styles</Link>
          </nav>
          <div className="logo">
            <Link to="/" className="logo-link">
              <span className="hide-content">I love lamp</span>
              <div className="big-logo" aria-hidden="true">
                <svg
                  width="562px"
                  height="45px"
                  viewBox="0 0 562 45"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns
                  xlink="http://www.w3.org/1999/xlink"
                >
                  <title>Group</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Group"
                      transform="translate(0.000000, -7.000000)"
                      fill="#FFFFFF"
                    >
                      <g
                        id="ill-white"
                        transform="translate(0.000000, 7.000000)"
                        fill-rule="nonzero"
                      >
                        <polygon
                          fill="currentColor"
                          id="Path"
                          points="0.6 43.1 0.6 1.3 5.3 1.3 5.3 43.1 0.6 43.1"
                        />
                        <polygon
                          fill="currentColor"
                          id="Path"
                          points="39.1 43.1 39.1 1.3 48.3 1.3 48.3 34.7 64.6 34.7 64.6 43.1 39.1 43.1"
                        />
                        <path
                          fill="currentColor"
                          d="M97.3,7 C101.5,2.9 107.2,0.6 113.1,0.7 C119,0.6 124.7,2.9 128.9,7 C133.2,11 135.5,16.5 135.4,22.4 C135.5,28.2 133.2,33.8 128.9,37.8 C120,46.1 106.1,46.1 97.2,37.8 C93,33.8 90.6,28.2 90.7,22.4 C90.7,16.5 93,10.9 97.3,7 Z M103.8,31.8 C106.2,34.3 109.6,35.7 113.1,35.6 C116.6,35.7 119.9,34.3 122.3,31.8 C127.4,26.6 127.4,18.3 122.4,13 C117.4,7.9 109.1,7.8 104,12.8 C103.9,12.9 103.9,12.9 103.8,13 C98.8,18.2 98.8,26.5 103.8,31.8 L103.8,31.8 Z"
                          id="Shape"
                        />
                        <polygon
                          fill="currentColor"
                          id="Path"
                          points="176.4 43.1 159.2 1.3 169 1.3 180.4 29.6 191.7 1.3 201.5 1.3 184.4 43.1 176.4 43.1"
                        />
                        <polygon
                          fill="currentColor"
                          id="Path"
                          points="230.6 43.1 230.6 1.3 259.2 1.3 259.2 9.7 239.9 9.7 239.9 17.6 258 17.6 258 25.8 239.9 25.8 239.9 34.7 259.6 34.7 259.6 43.1"
                        />
                      </g>
                      <text
                        fill="currentColor"
                        id="SHIRTS"
                        font-family="Arial-BoldMT, Arial"
                        font-size="53"
                        font-weight="bold"
                        letter-spacing="14.19643"
                      >
                        <tspan x="299.235417" y="48">
                          SHIRTS
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="small-logo" aria-hidden="true">
                <svg
                  width="329px"
                  height="43px"
                  viewBox="0 0 329 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Group</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Group"
                      transform="translate(0.000000, -8.000000)"
                      fill="#2D2D40"
                    >
                      <g
                        id="ill-short-dark"
                        transform="translate(0.000000, 8.000000)"
                        fill-rule="nonzero"
                      >
                        <polygon
                          fill="currentColor"
                          id="Path"
                          points="0.2 42.2 0.2 0.4 4.9 0.4 4.9 42.2 0.2 42.2"
                        />
                        <path
                          fill="currentColor"
                          d="M78.375,12.6 C78.375,15.8 77.175,19 74.675,21.4 L53.675,42.4 L32.675,21.4 C27.775,16.5 27.775,8.6 32.675,3.7 C35.075,1.3 38.275,0 41.575,0 C44.775,0 47.975,1.2 50.375,3.7 L53.675,7 L56.975,3.7 C61.875,-1.2 69.775,-1.2 74.675,3.7 C77.075,6.2 78.375,9.4 78.375,12.6 Z"
                          id="Path"
                        />
                      </g>
                      <text
                        fill="currentColor"
                        id="SHIRTS"
                        font-family="Arial-BoldMT, Arial"
                        font-size="54"
                        font-weight="bold"
                        letter-spacing="6.53999996"
                      >
                        <tspan x="101.141211" y="49">
                          SHIRT
                        </tspan>
                        <tspan x="295.841211" y="49">
                          S
                        </tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
          </div>
          <nav className="secondary-nav">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container hide-content">
          <div className="content">
            <h1>Products listing</h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductsHeader);
