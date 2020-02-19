"use strict";

// Set 'false' if you want boost script
const isDebug = false

const tests = [
  {
    input: ['1.5', '3', '6', '1.5'],
    expected: ['12.500', '25.000', '50.000', '12.500']
  },
  {
    input: [0, 0, 0, 0],
    expected: ['0.000', '0.000', '0.000', '0.000']
  },
  {
    input: ['a', 4],
    expected: ['0.000', '100.000']
  },
  {
    input: ['-2', '+4', '--6', '0'],
    expected: ['-100.000', '200.000', '0.000', '0.000']
  },
  {
    input: ['12', '12', '0', '6'],
    expected: ['40.000', '40.000', '0.000', '20.000']
  },
]

/**
 * Convert to float number
 *
 * @param  {*} input - unknown input value
 * @return {number} - Float number
 */
const toFloat = input => {
  const float = parseFloat(input)
  return isNaN(float) ? 0 : float
}

/**
 * Get percentage of all shares
 *
 * @param  {array} shares - Array of shares
 * @return {array} - Array of percents
 */
const getPercents = (shares) => {
  // Sum of all shares
  let sum = shares.reduce((accumulator, share) => accumulator + toFloat(share), 0)

  // Array of percents
  return shares.map(share => sum ? (toFloat(share)*100/sum).toFixed(3) : '0.000')
}

/**
 * Run tests
 */
const runTests = () => {
  console.info('Run tests')
  console.info()

  // Maximum: 5s
  const maximumTimeOfLoop = 5000
  const start = Date.now();

  const counter = tests.length;
  let index = 0;
  do {
    if (Date.now() - start >= maximumTimeOfLoop) {
      break;
    }
    let test = tests[index]
    if (isDebug) {
      console.group();
      console.info('Test #' + index + ' start')
      console.time('Test #' + index)
    }

    // Get percentage of all input shares
    let result = getPercents(test.input)

    if (isDebug) {
      console.timeEnd('Test #' + index)
      console.info('Test #' + index + ' result:', result)
      console.info('Test #' + index + ' expected:', test.expected)
      console.info('Test #' + index + (JSON.stringify(result) === JSON.stringify(test.expected) ? ' SUCCESS' : ' FAILED'))
      console.groupEnd();
      console.info('---------------------')
    }
    index++;
  } while (index < counter);
  console.log('All tests: ' + (Date.now() - start) + 'ms')
  console.log('Iterations: ' + index)
}

runTests();
