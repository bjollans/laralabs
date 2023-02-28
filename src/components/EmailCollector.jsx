import { ArrowSmallRightIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';

export function EmailCollector() {

    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        fetch("https://6x2rd73ie4x4pvh6wte32nsavq0uwlwv.lambda-url.eu-central-1.on.aws/?mail=" + email)
        setEmailSent(true)
    }

    const headingText = () => {
      return emailSent? "Thanks! See you in our alpha." : "Signup for early access"
    }

    const waitlistSignup = () => {
      if(emailSent) {
        return (<h1 className="text-3xl lg:col-span-6 text-slate-700 tracking-tight">
        
        </h1>)
      }
      return (
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2" onSubmit={sendEmail}>
        <div className="flex gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            your email address...
          </label>
          <input
            id="email-address"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-violet-700 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
      <button
        type="submit"
        className="flex-none rounded-md bg-violet-700 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
      >
        <div className="flex gap-x-2">
        <p>Join waitlist</p> <ArrowSmallRightIcon className="h-6 w-6"/>
        </div>
      </button>
        </div>
      </form>)
    }

    return (
      <section
      id="emailcollector">
      <div className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">{headingText()}</h2>{' '}
          </div>
          {waitlistSignup()}
        </div>
      </div>
      </section>
    )
  }
  