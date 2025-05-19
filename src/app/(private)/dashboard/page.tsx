import React from 'react';
import { AiFillFilter } from 'react-icons/ai';
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaShoppingBag,
  FaUtensils,
} from 'react-icons/fa';
import { MdGroups, MdKitchen } from 'react-icons/md';

import { ChartAreaInteractive } from '@/components/charts/line-chart';
import { TransactionsTable } from '@/components/finance/table';
import { siteConfig } from '@/settings/routes';
import CardGrid from '@/templates/dashboard/cards';
import Transactions from '@/templates/dashboard/transactions-table';
import { SummaryByCategory } from '@/templates/dashboard/summary-by-category';
import UpcomingTransactions from '@/templates/dashboard/upcoming-transactions';
const Component = () => {
  const transactions = [
    {
      icon: <FaCreditCard className="text-blue-500" />,
      iconBg: 'bg-blue-50',
      title: 'Adobe Subscription',
      subtitle: 'Recurring',
      category: 'Software',
      date: 'Apr 23, 2023',
      amount: '-$49.99',
      amountColor: 'text-red-500',
      status: 'Completed',
    },
    {
      icon: <FaMoneyBillWave className="text-green-500" />,
      iconBg: 'bg-green-50',
      title: 'Client Payment',
      subtitle: 'Freelance Work',
      category: 'Income',
      date: 'Apr 20, 2023',
      amount: '+$1,200.00',
      amountColor: 'text-green-500',
      status: 'Completed',
    },
    {
      icon: <FaShoppingBag className="text-purple-500" />,
      iconBg: 'bg-purple-50',
      title: 'Grocery Store',
      subtitle: 'Weekly Shopping',
      category: 'Food',
      date: 'Apr 18, 2023',
      amount: '-$85.35',
      amountColor: 'text-red-500',
      status: 'Completed',
    },
    {
      icon: <MdGroups className="text-blue-500" />,
      iconBg: 'bg-blue-50',
      title: 'Vanguard ETF',
      subtitle: 'Investment',
      category: 'Investment',
      date: 'Apr 15, 2023',
      amount: '-$500.00',
      amountColor: 'text-red-500',
      status: 'Completed',
    },
    {
      icon: <MdKitchen className="text-red-500" />,
      iconBg: 'bg-red-50',
      title: 'Dinner Restaurant',
      subtitle: 'Entertainment',
      category: 'Food & Dining',
      date: 'Apr 10, 2023',
      amount: '-$94.75',
      amountColor: 'text-red-500',
      status: 'Completed',
    },
  ];
  return (
    <main>
      <div className="space-y-8">
        <header className="">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Financial Dashboard</h1>
          </div>
        </header>

        <CardGrid />

        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <ChartAreaInteractive />
          </div>
          <div className="col-span-1">
            <SummaryByCategory />
          </div>
        </div>
        <Transactions />

        <UpcomingTransactions />
        {/*
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold">Savings Goals</h3>
              <button className="text-primary-600 hover:text-primary-800 text-xs transition-colors duration-300">
                Add New
              </button>
            </div>
            <div className="space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="font-medium">Vacation Fund</p>
                    <p className="text-xs text-gray-500">$2,500 of $5,000</p>
                  </div>
                  <p className="text-sm font-medium">50%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="bg-primary-500 h-2 rounded-full"
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Car</p>
                    <p className="text-xs text-gray-500">$12,000 of $30,000</p>
                  </div>
                  <p className="text-sm font-medium">40%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="bg-primary-500 h-2 rounded-full"
                    style={{ width: '40%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="font-medium">Emergency Fund</p>
                    <p className="text-xs text-gray-500">$8,500 of $10,000</p>
                  </div>
                  <p className="text-sm font-medium">85%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="bg-primary-500 h-2 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};
export default Component;
