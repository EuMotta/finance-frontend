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
import CardGrid from '@/templates/dashboard/cards';
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
      <div className="p-6 font-sans">
        <header className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Financial Dashboard</h1>
          </div>
        </header>

        <CardGrid />

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold">Revenue Overview</h3>
              <div className="group relative">
                <button className="rounded-lg p-2 transition-colors duration-300 hover:bg-gray-100">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
                <div className="invisible absolute right-0 z-50 mt-2 w-40 rounded-lg bg-white p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="cursor-pointer rounded-md px-2 py-1 transition-colors duration-300 hover:bg-gray-50">
                    Download
                  </div>
                  <div className="cursor-pointer rounded-md px-2 py-1 transition-colors duration-300 hover:bg-gray-50">
                    Share
                  </div>
                  <div className="cursor-pointer rounded-md px-2 py-1 transition-colors duration-300 hover:bg-gray-50">
                    Print
                  </div>
                </div>
              </div>
            </div>
            <ChartAreaInteractive />
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-card bg-card p-5 shadow-sm">
          <div className="overflow-x-auto">
            <TransactionsTable />
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold">Upcoming Bills</h3>
              <button className="text-primary-600 hover:text-primary-800 text-xs transition-colors duration-300">
                View All
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3 transition-colors duration-300 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-red-50 p-2">
                    <span className="material-symbols-outlined text-sm text-red-500">
                      home
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">Rent Payment</p>
                    <p className="text-xs text-gray-500">Due in 3 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$1,200.00</p>
                  <p className="text-xs text-red-500">Apr 28, 2023</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3 transition-colors duration-300 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-50 p-2">
                    <span className="material-symbols-outlined text-sm text-blue-500">
                      power
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">Electricity Bill</p>
                    <p className="text-xs text-gray-500">Due in 7 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$85.42</p>
                  <p className="text-xs text-red-500">May 2, 2023</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3 transition-colors duration-300 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-purple-50 p-2">
                    <span className="material-symbols-outlined text-sm text-purple-500">
                      wifi
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">Internet Service</p>
                    <p className="text-xs text-gray-500">Due in 10 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$59.99</p>
                  <p className="text-xs text-red-500">May 5, 2023</p>
                </div>
              </div>
            </div>
          </div>

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
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500">
          <p>© 2023 JAM. All rights reserved.</p>
          <p className="mt-1">Version x</p>
        </footer>
      </div>
    </main>
  );
};
export default Component;
