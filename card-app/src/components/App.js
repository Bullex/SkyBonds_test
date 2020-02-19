import React, { Component } from "react";
import { connect } from "react-redux";

import ChartInfo from "./ChartInfo";
import Filter from "./Filter";
import Period from "./Period";
import Search from "./Search";
import { getData } from '../services';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  componentDidMount() {
    this.props.getData(this.props.isin);
  }

  componentDidUpdate({ isin }) {
    if (isin !== this.props.isin) {
      this.props.getData(this.props.isin);
    }
  }

  render() {
    return (
      <div className="container">
        <Search />
        <div className="row justify-content-between">
          <Period />
          <Filter />
        </div>
        <ChartInfo {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = ({ data: { data: {isin, ...meta }} }) => ({
  isin,
  ...meta
});

const mapDispatchToProps = { getData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
