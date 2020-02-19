import moment from 'moment'

const getRandom = (from, to) => {
  return Math.floor((Math.random() * (to - from) + from) * 100) / 100;
};

const generateRandomDailyData = () => {
  return {
    price: getRandom(10, 100),
    yield: getRandom(0, 8),
    spread: getRandom(-5, 5)
  };
}

const generateData = () => {
  const data = [];
  let date = moment().subtract(2, "y");

  let dailyData = generateRandomDailyData();
  while (date.isSameOrBefore(moment.now())) {
    data.push({ date: date.format(), ...dailyData });
    dailyData = generateRandomDailyData();
    date.add(1, "d");
  }

  return data;
}

export const getRandomData = isin => {
  return {
    isin,
    name: "",
    info: "",
    price: "",
    currency: "USD",
    chartData: generateData()
  };
}
