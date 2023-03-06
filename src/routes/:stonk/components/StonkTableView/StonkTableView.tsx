import { useState } from "react";
import { useParams } from "react-router-dom";
import { isError } from "../../../../functions/isError";
import { useGetIntradayDataQuery } from "../../../../store/alphaVantageService";

export const StonkTableView = ({}: {}): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { stonk } = useParams();
  const { data, isSuccess } = useGetIntradayDataQuery(stonk ?? "aapl");

  if (!data || !isSuccess || isError(data)) {
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
        <thead>
          <tr>
            <th>Timestamp</th>
            <td>"1. open"</td>
            <td>"2. high"</td>
            <td>"3. low"</td>
            <td>"4. close"</td>
            <td>"5. volume"</td>
          </tr>
        </thead>
        <tbody>
          {timeSeriesArray.map((entry, i) => (
            <tr key={entry[1]["1. open"] + i}>
              <th>{entry[0]}</th>
              <td>{entry[1]["1. open"]}</td>
              <td>{entry[1]["2. high"]}</td>
              <td>{entry[1]["3. low"]}</td>
              <td>{entry[1]["4. close"]}</td>
              <td>{entry[1]["5. volume"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "expand" : "collapse"}
      </button>
    </div>
  );
};
