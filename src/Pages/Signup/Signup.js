import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
axios.post("/user-signup",data).then((res)=>{
  toast(res.data)
  console.log(res.data);

})
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-2xl font-bold text-gray-900">
            Register
          </h1>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                UserName
              </label>
              <input
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                {...register('username')}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                {...register('email')}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                name="streetAddress"
                type="text"
                autoComplete="street-address"
                required
                {...register('streetAddress')}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Street Address"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                name="city"
                type="text"
                autoComplete="address-level2"
                required
                {...register('city')}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="City"
              />
            </div>
            <div>
              <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700">
                State/Province
              </label>
              <input
                name="stateProvince"
                type="text"
                autoComplete="address-level1"
                required
                {...register('stateProvince')}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="State/Province"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                name="country"
                type="text"
                autoComplete="country-name"
                required
                {...register('country')}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Country"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                ZIP/Postal Code
              </label>
              <input
                name="zipCode"
                type="text"
                autoComplete="postal-code"
                required
                {...register('zipCode')}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="ZIP/Postal Code"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                name="zipCode"
                type="text"
                autoComplete="postal-code"
                required
                {...register('password')}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="ZIP/Postal Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Alerts
              </label>
              <div className="mt-1 space-y-2">
                <label htmlFor="alerts" className="flex items-center">
                  <input
                    name="alerts"
                    type="checkbox"
                    {...register('alerts')}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">Get updates of any new activity or features. Turn on/off your preferences</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Login here
          </Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  )
}