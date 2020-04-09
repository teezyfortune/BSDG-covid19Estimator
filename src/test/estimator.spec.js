import covid19ImpactEstimator from '../estimator';


describe('TEST FOR covid19ImpactEstimator', () => {
  let input;
  test('should return data, imapct and severeImpact', () => {
    const covid19 = covid19ImpactEstimator(input);
    const { data, impact, severeImpact } = covid19;
    expect(covid19).toMatchObject({ data, impact, severeImpact });
  });
});
