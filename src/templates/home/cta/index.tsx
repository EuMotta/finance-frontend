import React from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

import {
  Section,
  SectionHeader,
  SectionGoal,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/common/section';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <Section className="py-20">
      <div className="rounded-xl bg-accent p-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="md:pr-6 lg:col-span-7">
            <SectionHeader>
              <SectionGoal>Take Control of Your Financial Future</SectionGoal>
              <SectionTitle>Take Control of Your Financial Future</SectionTitle>
              <SectionDescription className="text-muted-foreground">
                Join thousands of users who have transformed their finances with
                our powerful tools and insights. Start your journey to financial
                freedom today.
              </SectionDescription>
            </SectionHeader>

            <SectionContent className="flex flex-col items-center justify-center">
              <div className="mb-8 flex flex-wrap gap-4">
                {[
                  'Smart Budget Planning',
                  'Automated Savings',
                  'Investment Tracking',
                ].map((text) => (
                  <div key={text} className="flex items-center">
                    <FaCheck className="text-emerald-400" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size={'lg'}>
                  Começar agora
                  <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </SectionContent>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <div className="relative">
              <div className="absolute -right-4 -top-4 z-10 rotate-3 transform rounded-lg border border-gray-100 bg-white p-4 shadow-xl transition-transform duration-300 hover:rotate-0">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <p className="text-sm font-medium">Investment Growth</p>
                </div>
                <p className="text-2xl font-bold text-green-600">+28.6%</p>
              </div>

              <div className="absolute -bottom-4 -left-4 z-10 -rotate-2 transform rounded-lg border border-gray-100 bg-white p-4 shadow-xl transition-transform duration-300 hover:rotate-0">
                <div className="mb-2 flex items-center gap-2">
                  <div className="bg-primary-500 h-3 w-3 rounded-full"></div>
                  <p className="text-sm font-medium">Monthly Savings</p>
                </div>
                <p className="text-primary-600 text-2xl font-bold">$1,248</p>
              </div>

              <div className="transform overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-transform duration-500 hover:scale-105">
                <div className="bg-primary-700 flex items-center justify-between p-4">
                  <h3 className="font-bold text-white">Financial Dashboard</h3>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                    <span className="h-3 w-3 rounded-full bg-green-400"></span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 rounded-lg bg-gray-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="font-medium">Portfolio Balance</h4>
                      <span className="text-sm font-medium text-green-600">
                        +5.2% today
                      </span>
                    </div>
                    <p className="mb-4 text-3xl font-bold">$84,376.48</p>
                    <div className="from-primary-100 flex h-40 items-end rounded-lg bg-gradient-to-r to-indigo-100 p-3">
                      <div className="bg-primary-300 mx-1 h-1/3 w-1/6 rounded-t-md hover:h-2/3"></div>
                      <div className="bg-primary-400 mx-1 h-1/4 w-1/6 rounded-t-md hover:h-2/3"></div>
                      <div className="bg-primary-500 mx-1 h-2/3 w-1/6 rounded-t-md hover:h-4/5"></div>
                      <div className="bg-primary-600 mx-1 h-1/2 w-1/6 rounded-t-md hover:h-4/5"></div>
                      <div className="bg-primary-700 mx-1 h-3/4 w-1/6 rounded-t-md hover:h-full"></div>
                      <div className="mx-1 h-4/5 w-1/6 rounded-t-md bg-indigo-600 hover:h-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ['Stocks', '$45,678', 'trending_up', 'text-primary-500'],
                      [
                        'Crypto',
                        '$12,356',
                        'currency_bitcoin',
                        'text-amber-500',
                      ],
                      ['Savings', '$21,445', 'savings', 'text-green-500'],
                      [
                        'Real Estate',
                        '$4,897',
                        'location_city',
                        'text-indigo-500',
                      ],
                    ].map(([label, value, icon, color]) => (
                      <div
                        key={label}
                        className="rounded-lg bg-gray-50 p-3 transition-shadow hover:shadow-md"
                      >
                        <p className="text-sm text-gray-500">{label}</p>
                        <div className="flex items-center justify-between">
                          <p className="font-semibold">{value}</p>
                          <span className={`${color}`}>{icon}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
