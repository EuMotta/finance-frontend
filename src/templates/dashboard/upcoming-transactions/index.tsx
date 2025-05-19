'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetAllUpcomingTransactions } from '@/http/generated/client/api';

import { formatDate, lastDate } from '@/utils/format-date';

import { TRANSACTION_CATEGORIES } from '@/constants/transaction_categories';

const UpcomingTransactions = () => {
  const {
    data: upcomingTransactions,
    isLoading,
    isError,
    error,
  } = useGetAllUpcomingTransactions({ page: 1, limit: 4 });

  if (isLoading)
    return (
      <Card className="space-y-5 p-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className="flex items-center justify-between gap-5 rounded-lg border p-3 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="rounded-full p-2">
                  <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-5 w-28 rounded-full" />
                  <Skeleton className="h-5 w-24 rounded-full" />
                </div>
              </div>
              <div className="space-y-2 text-right">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </Card>
    );

  if (isError)
    return (
      <Card>
        <CardHeader>
          <CardTitle>Erro</CardTitle>
          <CardDescription>
            {error?.message ||
              error.response?.data?.message ||
              'Erro desconhecido'}
          </CardDescription>
        </CardHeader>
      </Card>
    );

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card className="rounded-xl p-5 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-bold">Últimas transações pendentes</h3>
          <Button variant={'link'}>View All</Button>
        </div>
        <div className="space-y-4">
          {upcomingTransactions &&
            upcomingTransactions.data.data.map((transaction) => {
              const categoryData = TRANSACTION_CATEGORIES.find(
                (item) => item.value === transaction.category,
              );
              return (
                <Card
                  key={transaction.date}
                  className="flex items-center justify-between rounded-lg border p-3 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    {categoryData?.icon && (
                      <span
                        className={`${categoryData.textColor} ${categoryData.bgColor} rounded-full p-2`}
                      >
                        <categoryData.icon />
                      </span>
                    )}
                    <div>
                      <p className="font-medium">{transaction.title}</p>
                      <p className="text-xs">{lastDate(transaction.date)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${transaction.amount}</p>
                    <p className="text-xs text-destructive">
                      {formatDate(transaction.date)}
                    </p>
                  </div>
                </Card>
              );
            })}
        </div>
      </Card>
    </div>
  );
};

export default UpcomingTransactions;
