import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface AlphaVantageResponse {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Interval": string;
    "5. Output Size": string;
    "6. Time Zone": string;
  };
  "Time Series (15min)": {
    [key: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  };
}
// Define a service using a base URL and expected endpoints
export const alphaVantageApi = createApi({
  reducerPath: "alphaVantageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.alphavantage.co" }),
  endpoints: (builder) => ({
    getIntradayData: builder.query<AlphaVantageResponse, string>({
      query: (stonk) =>
        `query?function=TIME_SERIES_INTRADAY&symbol=${stonk}&interval=15min&apikey=WDRS1BQVI2NH3EIZ`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetIntradayDataQuery } = alphaVantageApi;
