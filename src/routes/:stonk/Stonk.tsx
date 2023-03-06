import React from "react";
import { useParams } from "react-router-dom";
import { isError } from "../../functions/isError";
import { useGetIntradayDataQuery } from "../../store/alphaVantageService";
import { StonkHeader } from "./components/StonkHeader/StonkHeader";
import { StonkTableView } from "./components/StonkTableView/StonkTableView";

export const Stonk = ({}: {}): JSX.Element => {
  const { stonk } = useParams();
  const { data, isSuccess } = useGetIntradayDataQuery(stonk ?? "aapl");

  if (!stonk) {
    return <div>please search for a stock symbol</div>;
  }
  if (!data || !isSuccess || isError(data)) {
    return (
      <>
        {" "}
        <div>Something went wrong. Are you sure this is a valid symbol?</div>
        <h3>{stonk}</h3>
      </>
    );
  }
  return (
    <React.Fragment>
      <StonkHeader />
      <StonkTableView />
    </React.Fragment>
  );
};
