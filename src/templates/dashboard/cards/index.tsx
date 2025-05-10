'use client';
import React from 'react';
import { FaArrowDown, FaArrowUp, FaChartLine, FaWallet } from 'react-icons/fa';

import { useGetTransactionSummary } from '@/http/generated/client/api';
import EmptyState from '@/components/common/empty-state';

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
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-2xl font-bold">{amount}</h2>
        </div>
        <div className={`rounded-full p-3 ${iconBg}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="flex items-center">
        <span className={`text-sm font-medium ${changeColor}`}>{change}</span>
        <span className="ml-2 text-xs text-gray-500">vs last month</span>
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const {
    data: summary,
    isLoading,
    isError,
    error,
  } = useGetTransactionSummary();

  if (isLoading) return <div>Carregando...</div>;
  if (isError)
    return (
      <div>
        <EmptyState
          title="Aconteceu um problema!"
          subtitle={
            error.message || 'Não sei ainda o que é, mas vou descobrir!.'
          }
          image="/stickers/system.png"
        />
      </div>
    );

  const defaultData = {
    totalBalance: { value: 0, changePercent: 0 },
    income: { value: 0, changePercent: 0 },
    expenses: { value: 0, changePercent: 0 },
    investments: { value: 0, changePercent: 0 },
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
      amount: `$${data.totalBalance.value.toFixed(2)}`,
      icon: FaWallet,
      iconBg: 'bg-primary-50 text-primary-500',
      change: formatChange(data.totalBalance.changePercent),
      changeColor: getChangeColor(data.totalBalance.changePercent),
    },
    {
      title: 'Income',
      amount: `$${data.income.value.toFixed(2)}`,
      icon: FaArrowUp,
      iconBg: 'bg-green-50 text-green-500',
      change: formatChange(data.income.changePercent),
      changeColor: getChangeColor(data.income.changePercent),
    },
    {
      title: 'Expenses',
      amount: `$${data.expenses.value.toFixed(2)}`,
      icon: FaArrowDown,
      iconBg: 'bg-red-50 text-red-500',
      change: formatChange(data.expenses.changePercent),
      changeColor: getChangeColor(data.expenses.changePercent),
    },
    {
      title: 'Investments',
      amount: `$${data.investments.value.toFixed(2)}`,
      icon: FaChartLine,
      iconBg: 'bg-blue-50 text-blue-500',
      change: formatChange(data.investments.changePercent),
      changeColor: getChangeColor(data.investments.changePercent),
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
