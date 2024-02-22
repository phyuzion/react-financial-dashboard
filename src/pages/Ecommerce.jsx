import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import SemiPieChart from '../components/Charts/SemiPieChart'
import { Stacked, Pie, Button, LineChart, SparkLine, Footer } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, SparklineAreaDataExpense, ecomPieChartData, activityPosts } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const Ecommerce = () => {

  const { currentColor, currentMode } = useStateContext()

  return (
    <section className="mt-24 md:mt-2 mx-7">
      <div className='flex flex-wrap lg:flex-nowrap justify-center flex-col items-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full md:w-780 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center shadow-lg  hover:drop-shadow-xl mb-5'>
          <div className='flex justify-between items-center self-center'>
            <div>
              <p className="font-bold text-gray-400">2024/02 수익 현황</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="정산 요청"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-5 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl shadow-xl hover:drop-shadow-xl cursor-pointer'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>

              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center drop-shadow-2xl mt-5'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-1 p-4 rounded-2xl md:w-760'>
          <div className="flex justify-between">
            <p className="font-semibold text-xl">수익 현황 그래프</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>총 수익</span>
              </p>
              <p className="flex items-center gap-2 stacked-budget-color hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>내 수익</span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$63,448</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>25%</span>
                </p>
                <p className='text-gray-500 mt-1'>내 순수익</p>ㄹ
              </div>

              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$253,792</span>
                </p>
                <p className='text-gray-500 mt-1'>총 수익</p>
              </div>

              <div className='mt-5 border-b-2 pb-2'>
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <div className='mt-10'>
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="상세 보기"
                  borderRadius="10px"
                />
              </div>
            </div>

            <div>
              <Stacked
                width="320px"
                height="360px"
              />
            </div>
          </div>
        </div>

        {/* Pie charts */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-2 pt-5 pb-0 m-3 flex justify-center items-center gap-10 flex-col w-full drop-shadow-2xl">

          <div className='self-center mb-0 pb-0'>
            <p className="text-4xl font-semibold text-center">$435,246</p>
            <p className="text-gray-400 text-xl text-center">Yearly sales</p>
          </div>

          <div className='flex items-center flex-wrap justify-center'>
            {/* Yearly Salary */}
            <div>

              <div className="w-40">
                <Pie
                  id="pie-chart"
                  data={ecomPieChartData}
                  legendVisiblity={false}
                  height="160px" />
              </div>
            </div>

            {/* Semi Pie */}
            <div className='w-fit'>
              <SemiPieChart />
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className='flex gap-10 m-4 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl drop-shadow-2xl'>
            <div className='flex justify-between items-center gap-2 flex-col'>

              <div className='flex justify-between items-center w-full mb-0 pb-0'>
                <p className='text-xl font-semibold'>
                  Recent Transactions
                </p>

                {/* Dropdown */}

                <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
                  <DropDownListComponent
                    id="time"
                    fields={{ text: 'Time', value: 'Id' }}
                    style={{
                      border: 'none',
                      color: (currentMode === 'Dark') && 'white'
                    }}
                    value="1"
                    dataSource={dropdownData}
                    popupHeight="220px"
                    popupWidth="120px" />
                </div>
              </div>
              <div className='mt-10 w-72 md:w-400'>
                {recentTransactions.map((item, index) => (
                  <div key={index} className='flex justify-between items-center mt-2 p-2 rounded-2xl hover:shadow-lg cursor-pointer'>
                    <div className='flex gap-4'>
                      <button
                        type='button'
                        style={{
                          color: item.iconColor,
                          backgroundColor: item.iconBg
                        }}
                        className='text-2xl rounded-lg p-4 hover:drop-shadow-xl'
                      >
                        {item.icon}
                      </button>
                      <div>
                        <p className='text-md font-semibold'>
                          {item.title}
                        </p>
                        <p className='text-sm text-gray-400'>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <p className={`text-${item.pcColor}`}>
                      {item.amount}
                    </p>
                  </div>
                ))}
              </div>

              <div className='flex justify-between items-center mt-5 border-t-1 border-color w-full'>
                <div className='mt-3'>
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Add"
                    borderRadius="10px"
                    width="28"
                  />
                </div>
                <p className="text-gray-400 text-sm self-center">
                  36 Recent Transactions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Line chart */}
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760'>

          <div className='flex justify-between items-center w-full mb-5 pb-0'>
            <p className='text-xl font-semibold'>
              Sales Overview
            </p>

            {/* Dropdown */}

            <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
              <DropDownListComponent
                id="time2"
                fields={{ text: 'Time', value: 'Id' }}
                style={{
                  border: 'none',
                  color: (currentMode === 'Dark') && 'white'
                }}
                value="1"
                dataSource={dropdownData}
                popupHeight="220px"
                popupWidth="120px" />
            </div>
          </div>

          <div className='md:w-full overflow-auto'>
            <LineChart />
          </div>

        </div>

        <Footer />
      </div>
    </section>
  );
}

export default Ecommerce;

