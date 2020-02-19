import React from "react";
import { connect } from "react-redux";
import { filters } from "../enums";
import { changeFilter } from "../ducks/data";

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className="col-3">
      <select
        defaultValue={filter}
        onChange={(e) => changeFilter(e.target.value)}
        className="h-100 w-100"
      >
        <option value={filters.PRICE}>Price</option>
        <option value={filters.YIELD}>Yield</option>
        <option value={filters.SPREAD}>Spread</option>
      </select>
    </div>
  );
};

const mapStateToProps = ({data: {filter}}) => ({
  filter
});
const mapDispatchToProps = dispatch => ({
  changeFilter: (filter) => changeFilter(filter, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
