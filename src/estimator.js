const challenges = require('./challenges');

// const inputData = {
//   region: {
//     name: 'Africa',
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 5,
//     avgDailyIncomePopulation: 0.71
//   },
//   periodType: 'months',
//   timeToElapse: 30,
//   reportedCases: 674,
//   population: 66622705,
//   totalHospitalBeds: 1380614

// };

const covid19ImpactEstimator = (data) => {
  const allChallenges = ({ impact, severeImpact }) => {
    challenges.currentInFectedEstimator({ data, impact, severeImpact });
    challenges.calcInFectionBytime({ data, impact, severeImpact });

    challenges.serioulsyInfectedCases({ impact, severeImpact });
    challenges.getAvailablebedByDuaration({ data, impact, severeImpact });

    // challenge 3
    challenges.findICUImpact({ impact, severeImpact });
    challenges.caseForVentilation({ impact, severeImpact });
    challenges.dollarsInflightImpact({ data, impact, severeImpact });

    return { data, impact, severeImpact };
  };

  return allChallenges({
    data,
    impact: {},
    severeImpact: {}
  });
};

export default covid19ImpactEstimator;
