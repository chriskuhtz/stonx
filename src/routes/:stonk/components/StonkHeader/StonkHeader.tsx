import { useParams } from "react-router-dom";
import { isError } from "../../../../functions/isError";
import { useGetIntradayDataQuery } from "../../../../store/alphaVantageService";

export const StonkHeader = ({}: {}): JSX.Element => {
  const { stonk } = useParams();
  const { data, isSuccess } = useGetIntradayDataQuery(stonk ?? "aapl");

  if (!data || !isSuccess || isError(data)) {
    return <></>;
  }
  console.log(isError(data));

  return (
    <div>
      <h1>{data["Meta Data"]["2. Symbol"]}</h1>
      <h3>{data["Meta Data"]["1. Information"]}</h3>
    </div>
  );
};
