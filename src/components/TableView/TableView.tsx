import { useState } from "react";
import { useGetIntradayDataQuery } from "../../store/alphaVantageService";

export const TableView = ({}: {}): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { data, isSuccess } = useGetIntradayDataQuery();

  if (!isSuccess || !data) {
    return <></>;
  }
  const timeSeriesArray = Object.entries(data["Time Series (15min)"]).slice(
    0,
    collapsed ? 10 : undefined
  );
  //console.log(Object.entries(data["Time Series (15min)"]));

  return (
    <div>
      <table>
        <tr>
          <th>Timestamp</th>
          <td>"1. open"</td>
          <td>"2. high"</td>
          <td>"3. low"</td>
          <td>"4. close"</td>
          <td>"5. volume"</td>
        </tr>
        {timeSeriesArray.map((entry) => (
          <tr>
            <th>{entry[0]}</th>
            <td>{entry[1]["1. open"]}</td>
            <td>{entry[1]["2. high"]}</td>
            <td>{entry[1]["3. low"]}</td>
            <td>{entry[1]["4. close"]}</td>
            <td>{entry[1]["5. volume"]}</td>
          </tr>
        ))}
      </table>
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "expand" : "collapse"}
      </button>
    </div>
  );
};
