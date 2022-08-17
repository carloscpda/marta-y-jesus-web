import React from "react"
import { Helmet } from "react-helmet"

export default function Example() {
  return (
    <div className="min-h-screen bg-blue-200">
      <Helmet>
        <title>Gracias</title>
        <meta name="description" content="Gracias por cofirmar" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Helmet>
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="relative px-4 pt-16 sm:px-6 sm:pt-24 lg:pt-32 lg:px-8 text-center">
              <h2 className="text-lg font-semibold tracking-wider text-blue-600 uppercase">
                Gracias por confirmar
              </h2>
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mt-2">
                <span className="block text-blue-800">
                  ¡Te esperamos <br />
                  en la boda!
                </span>
              </h1>
            </div>
            <div className="max-w-7xl mx-auto p-6 lg:p-8 h-96">
              <div className="relative shadow-xl rounded-2xl overflow-hidden h-96">
                <div className="absolute inset-0 h-96">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/thank-you.jpeg"
                  />
                  <div className="absolute inset-0 bg-pink-100 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
