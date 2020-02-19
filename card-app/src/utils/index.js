import moment from 'moment'
import { periods } from '../enums';

export const formatISODate = (iso, format) => {
  return moment(iso).format(format)
}

const getDaysInPeriod = (period, date) => {
  let subtractArgs = [];
  switch (period) {
    case periods.WEEK:
      subtractArgs = [1, "weeks"];
      break;
    case periods.MONTH:
      subtractArgs = [1, "months"];
      break;
    case periods.QUARTER:
      subtractArgs = [3, "months"];
      break;
    case periods.YEAR:
      subtractArgs = [1, "years"];
      break;
    default:
      return 0;
  }
  const endDate = moment(date);
  const startDate = endDate.clone().subtract(...subtractArgs);
  return endDate.diff(startDate, "days");
}

export const filterChartData = (chartData, period) => {
  if (!chartData.length) return [];

  const endDate = chartData[chartData.length - 1].date;
  const days = getDaysInPeriod(period, endDate);

  return chartData.slice(-days);
}
