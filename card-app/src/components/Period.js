import React from "react";
import { connect } from "react-redux";
import { periods } from "../enums";
import {changePeriod} from "../ducks/data";

const Period = ({ period, changePeriod }) => {
  return (
    <div className="btn-group col-5" role="group">
      <button type="button" className={"btn btn-secondary " + (period === periods.WEEK ? "active" : "")} onClick={() => changePeriod(periods.WEEK)}>Week</button>
      <button type="button" className={"btn btn-secondary " + (period === periods.MONTH ? "active" : "")} onClick={() => changePeriod(periods.MONTH)}>Month</button>
      <button type="button" className={"btn btn-secondary " + (period === periods.QUARTER ? "active" : "")} onClick={() => changePeriod(periods.QUARTER)}>Quarter</button>
      <button type="button" className={"btn btn-secondary " + (period === periods.YEAR ? "active" : "")} onClick={() => changePeriod(periods.YEAR)}>Year</button>
      <button type="button" className={"btn btn-secondary " + (period === periods.MAX ? "active" : "")} onClick={() => changePeriod(periods.MAX)}>Max</button>
    </div>
  );
};

const mapStateToProps = ({data: {period}}) => ({
  period
});
const mapDispatchToProps = dispatch => ({
  changePeriod: (period) => changePeriod(period, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Period);
