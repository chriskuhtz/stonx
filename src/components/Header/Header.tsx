import { useEffect } from "react";
import { useGetIntradayDataQuery } from "../../store/alphaVantageService";

export const Header = ({}: {}): JSX.Element => {
  const { data } = useGetIntradayDataQuery();

  useEffect(() => {
    console.log(data);
    console.log(data?.["Meta Data"]["2. Symbol"]);
  }, [data]);
  if (!data) {
    return <></>;
  }
  return (
    <div>
      <h1>{data["Meta Data"]["2. Symbol"]}</h1>
      <h3>{data["Meta Data"]["1. Information"]}</h3>
    </div>
  );
};
