import { type UrlKeys, useQueryStates, parseAsString } from 'nuqs';

export const useGetTransactionSummaryParamsParsers = {
  startMonth: parseAsString,
  endMonth: parseAsString,
};

export const useGetTransactionSummaryParamsUrlKeys: UrlKeys<
  typeof useGetTransactionSummaryParamsParsers
> = {
  startMonth: 'startMonth',
  endMonth: 'endMonth',
};

export const useGetTransactionSummaryParams = () => {
  const [params, setFilterParams] = useQueryStates(
    useGetTransactionSummaryParamsParsers,
    {
      urlKeys: useGetTransactionSummaryParamsUrlKeys,
    },
  );

  return {
    params,
    setFilterParams,
  };
};

export default useGetTransactionSummaryParams;
