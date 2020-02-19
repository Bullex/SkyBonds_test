import React, { Component } from "react";
import { connect } from "react-redux";
import { changeIsin } from "../ducks/data";

class Search extends Component {
  state = {
    isin: ""
  };

  componentDidMount() {
    this.setState({
      isin: this.props.isin
    })
  }

  onSearch = () => {
    this.props.changeIsin(this.state.isin);
  };

  searchOnChange = ({ target: { value } }) => {
    const isinMatch = value.match(/[a-zA-Z0-9]/g);
    this.setState({
      isin: isinMatch ? isinMatch.join("").toUpperCase() : ""
    })
  }

  searchKeyPressed = ({ key }) => {
    if (key === "Enter") {
      this.onSearch()
    }
  }

  render() {
    return (
      <div className="card p-2">
        <div className="input-group">
          <input type="text"
                 className="form-control"
                 value={this.state.isin}
                 onChange={this.searchOnChange}
                 onKeyPress={this.searchKeyPressed}
                 maxLength={12}
                 placeholder="Введите 12-ти значный ISIN код"
          />
          <div className="input-group-append">
            <button onClick={this.onSearch} className="btn btn-secondary">Поиск</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({data: {data: {isin}}}) => ({
  isin
});
const mapDispatchToProps = dispatch => ({
  changeIsin: (isin) => changeIsin(isin, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
