import { calculateInvestmentResults, formatter } from "../util/Investment";

export default function Results({ input }) {
  const resultcalculate = calculateInvestmentResults(input);
  const initialInnvest =
    resultcalculate[0].valueEndOfYear -
    resultcalculate[0].interest -
    resultcalculate[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultcalculate.map((yearData) => {
          const TotalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInnvest;
const InvestmentCapital=yearData.valueEndOfYear - TotalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(TotalInterest)}</td>
              <td> {formatter.format(InvestmentCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
