'use client';
import React from 'react';
import { FaArrowDown, FaArrowUp, FaChartLine, FaWallet } from 'react-icons/fa';

import EmptyState from '@/components/common/empty-state';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetTransactionSummary } from '@/http/generated/client/api';

import currencyConverter from '@/utils/currency-converter';
import { useGetTransactionSummaryParams } from '@/http/generated/params/useGetTransactionSummaryParams';

type SingleCard = {
  title: string;
  amount: string;
  icon: React.ElementType;
  iconBg: string;
  change: string;
  changeColor: string;
};

type CardProps = {
  card: SingleCard;
};

const Card: React.FC<CardProps> = ({ card }) => {
  const { title, amount, icon: Icon, iconBg, change, changeColor } = card;

  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h4 className="font-bold">{currencyConverter(amount)}</h4>
        </div>
        <div className={`rounded-full p-3 ${iconBg}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="flex items-center">
        <span className={`text-sm font-medium ${changeColor}`}>{change}</span>
        <span className="ml-2 text-xs text-muted-foreground">
          vs mês passado
        </span>
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const { params } = useGetTransactionSummaryParams();
  const {
    data: summary,
    isLoading,
    isError,
    error,
  } = useGetTransactionSummary(params);
  console.log(summary);
  if (isLoading)
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="mb-4 rounded-xl border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <Skeleton className="h-2 w-16" />
                <Skeleton className="mt-1 h-1 w-10" />
              </div>
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
            <div className="flex items-center gap-1">
              <Skeleton className="h-3 w-6 rounded-full" />
              <Skeleton className="h-3 w-6 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    );

  if (isError)
    return (
      <div>
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{'erro'}</p>
            <h2 className="text-2xl font-bold">
              {error?.message ||
                error.response.data.message ||
                'erro desconhecido'}
            </h2>
          </div>
        </div>
      </div>
    );

  const defaultData = {
    total_balance: { value: 0, change_percent: 0 },
    income: { value: 0, change_percent: 0 },
    expenses: { value: 0, change_percent: 0 },
    investments: { value: 0, change_percent: 0 },
  };

  const data = summary?.data ?? defaultData;

  const getChangeColor = (value: number) => {
    if (value > 0) return 'text-green-500';
    if (value < 0) return 'text-red-500';
    return 'text-gray-400';
  };

  const formatChange = (value: number) =>
    `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;

  const cardsData: SingleCard[] = [
    {
      title: 'Total Balance',
      amount: `${data.total_balance.value.toFixed(2)}`,
      icon: FaWallet,
      iconBg: 'bg-primary-50 text-primary-500',
      change: formatChange(data.total_balance.change_percent),
      changeColor: getChangeColor(data.total_balance.change_percent),
    },
    {
      title: 'Income',
      amount: `${data.income.value.toFixed(2)}`,
      icon: FaArrowUp,
      iconBg: 'bg-green-50 text-green-500',
      change: formatChange(data.income.change_percent),
      changeColor: getChangeColor(data.income.change_percent),
    },
    {
      title: 'Expenses',
      amount: `${data.expenses.value.toFixed(2)}`,
      icon: FaArrowDown,
      iconBg: 'bg-red-50 text-red-500',
      change: formatChange(data.expenses.change_percent),
      changeColor: getChangeColor(data.expenses.change_percent),
    },
    {
      title: 'Investments',
      amount: `${data.investments.value.toFixed(2)}`,
      icon: FaChartLine,
      iconBg: 'bg-blue-50 text-blue-500',
      change: formatChange(data.investments.change_percent),
      changeColor: getChangeColor(data.investments.change_percent),
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cardsData.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </div>
  );
};

export default CardGrid;
