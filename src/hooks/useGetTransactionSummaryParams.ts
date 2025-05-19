import { type UrlKeys, useQueryStates, parseAsString } from 'nuqs';
import { GetTransactionSummaryParams } from '../client/api.schemas';

export const useGetTransactionSummaryParamsParsers = {
  start_month: parseAsString,
  end_month: parseAsString,
};

export const useGetTransactionSummaryParamsUrlKeys: UrlKeys<
  typeof useGetTransactionSummaryParamsParsers
> = {
  start_month: 'start_month',
  end_month: 'end_month',
};

export const useGetTransactionSummaryParams = () => {
  const [params, setFilterParams] = useQueryStates(
    useGetTransactionSummaryParamsParsers,
    {
      urlKeys: useGetTransactionSummaryParamsUrlKeys,
    },
  );

  const transformedParams: GetTransactionSummaryParams = {
    start_month: params.start_month ?? undefined,
    end_month: params.end_month ?? undefined,
  };

  return {
    params: transformedParams,
    setFilterParams,
  };
};
