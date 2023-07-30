import React from "react";
const Teams = () => {
  return (
  <div className="pt-12 sm:pt-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mx-auto max-w-4xl text-center">
  <h2 className="text-3xl font-bold tracking-tight text-blue-800 dark:text-gray-200 sm:text-4xl">
  Embraced by over 5,000 new riders every day
  </h2>
  <p className="mt-3 text-xl text-gray-700 sm:mt-4">
  Discover the joy of riding with us. Join thousands of satisfied customers who have experienced the thrill of our premium services.
  </p>
  </div>
  </div>
  <div className="mt-10 pb-12 sm:pb-16">
  <div className="relative">
  <div className="absolute inset-0 h-1/2" />
  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mx-auto max-w-4xl">
  <dl className="rounded-lg sm:grid sm:grid-cols-3 bg-blue-50 dark:bg-gray-800">
  <div className="flex flex-col border-b border-blue-200 dark:border-gray-600 p-6 text-center sm:border-0 sm:border-r">
  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-blue-500">
  Premium Features
  </dt>
  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-700">
  100%
  </dd>
  </div>
  <div className="flex flex-col border-t border-b border-blue-200 dark:border-gray-600 p-6 text-center sm:border-0 sm:border-l sm:border-r">
  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-blue-500">
  Services Offered
  </dt>
  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-700">
  100+
  </dd>
  </div>
  <div className="flex flex-col border-t border-blue-200 dark:border-gray-600 p-6 text-center sm:border-0 sm:border-l">
  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-blue-500">
  Happy Riders
  </dt>
  <dd className="order-1 text-5xl font-bold tracking-tight text-blue-700">
  5k+
  </dd>
  </div>
  </dl>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
  };
  
  export default Teams;