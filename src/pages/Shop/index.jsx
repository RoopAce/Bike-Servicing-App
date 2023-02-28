import React from 'react'

const Shop = () => {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                
                                <div className="w-full max-w-md space-y-8">
                                    <div>
                                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                            Sign in to your account
                                        </h2>
                                        <p className="mt-2 text-center text-sm text-gray-600">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Login to get started with Ace Garage
                                            </a>
                                        </p>
                                    </div>
                                    <form className="mt-8 space-y-6" action="#" method="POST">
                                        <input type="hidden" name="remember" defaultValue="true" />
                                        <div className="-space-y-px rounded-md shadow-sm">
                                            <div>
                                                <label htmlFor="email-address" className="sr-only">
                                                    Email address
                                                </label>
                                                <input
                                                    id="email-address"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="password" className="sr-only">
                                                    Password
                                                </label>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                                                </span>
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Shop