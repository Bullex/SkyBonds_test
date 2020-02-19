import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import {connect} from "react-redux";

import { formatISODate, filterChartData } from "../utils";
import { periods } from "../enums"

const ChartInfo = ({
  name,
  price,
  isin,
  currency,
  info,
  data,
  filter,
  showLabel
}) => {
  return (
    <div className="card p-2">
      <div className="py-2 text-center">
        <h2>{name} {price} <span>{currency}</span></h2>
        <p className="lead">{isin}</p>
        <p className="lead">{info}</p>
      </div>
      <hr/>
      <ResponsiveContainer width="100%" minHeight={320}>
        <LineChart
          width={500}
          height={300}
          data={data}
          key={filter}
          margin={{
            top: 50, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"
                 tickFormatter={iso => formatISODate(iso, "DD.MM")}
                 interval="preserveEnd"
                 minTickGap={10}
                 tickCount={7}
                 padding={{left: 20, right: 20}}/>
          <YAxis
            interval="preserveStartEnd"
            domain={["auto", "auto"]}
            padding={{top: 20}}
            width={30}/>
          <Line
            type="monotone"
            dataKey={filter}
            stroke="#0033ff"
            dot={false}
            label={showLabel && {dy: -10, backgroundColor: "white"}}
            animationDuration={900}
            name={filter && filter[0].toUpperCase() + '' + filter.slice(1)}
          />
          <Tooltip labelFormatter={iso => formatISODate(iso, "DD.MM.YYYY HH:MM")}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const mapStateToProps = state => ({
  data: filterChartData(state.data.data.chartData, state.data.period),
  filter: state.data.filter,
  showLabel: state.data.period === periods.WEEK || state.data.period === periods.MONTH
})

export default connect(mapStateToProps)(ChartInfo);
