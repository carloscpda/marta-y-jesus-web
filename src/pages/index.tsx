import axios from "axios"
import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useForm } from "react-hook-form"
import Switch from "../components/switch"

const hotels = [
  {
    hotel: "Hotel Occidental Aranjuez",
    place: "Pl. de la Unesco, 2",
    phone: "918 099 399",
    stars: "⭐️ ⭐️ ⭐️ ⭐️",
  },
  {
    hotel: "Hotel NH Collection Palacio de Aranjuez",
    place: "C. de San Antonio, 22",
    phone: "918 099 222",
    stars: "⭐️ ⭐️ ⭐️ ⭐️",
  },
  {
    hotel: "Hotel El Cocherón 1919",
    place: "C. de Montesinos",
    phone: "918 754 350",
    stars: "⭐️ ⭐️",
  },
  {
    hotel: "Hostal Más Real",
    place: "C. de las Infantas, 6",
    phone: "918 090 369",
    stars: "⭐️ ⭐️",
  },
  {
    hotel: "Hostal Castilla",
    place: "Carr. de Andalucía, 98",
    phone: "918 912 627",
    stars: "⭐️ ⭐️",
  },
]

export default function Index() {
  const { register, handleSubmit, control, watch, setValue } =
    useForm<FormParams>()

  const onSubmit = async (params: FormParams) => {
    await axios.post("/api/submission", params)
    navigate("thank-you")
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Boda Marta y Jesús</title>
        <meta name="description" content="Confirma tu asistencia" />
        <meta property="og:image" content="/images/cover.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Helmet>
      <main>
        {/* Hero card */}
        <div className="relative md:mt-4">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover lg:object-top"
                  src="./images/hero.jpg"
                />
              </div>
              <div className="relative px-4 pb-24 pt-64 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mt-2">
                  <span className="block text-pink-200">Marta y Jesús</span>
                </h1>
                <p className="mt-1 max-w-lg mx-auto text-center text-xl font-light text-pink-200 sm:max-w-3xl">
                  29 de octubre de 2022
                </p>
                <div className="mt-8 sm:mt-44 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="flex justify-center">
                    <a
                      href="#form"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-pink-100 bg-pink-200 bg-opacity-20 hover:bg-opacity-50 sm:px-8"
                    >
                      Confirma tu asistencia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Church */}
        <div className="max-w-7xl mx-auto mt-16 mb-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-pink-100 rounded-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-pink-600 sm:text-4xl">
                  <span className="block">Parroquia San Pascual</span>
                </h2>
                <p className="mt-1 text-base leading-6 text-pink-700">
                  En Aranjuez a las 12:30
                </p>
                <div className="mt-1">
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/Fy5DtaN73Qy8ezf18"
                    className="text-sm font-semibold text-pink-600 hover:text-pink-500"
                  >
                    Ver en el mapa ↗
                  </a>
                </div>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 object-cover object-left-top sm:translate-x-16 lg:translate-y-10"
                src="./images/church.png"
              />
            </div>
          </div>
        </div>

        {/* Finca */}
        <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-100 rounded-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
                  <span className="block">Finca La Montaña</span>
                </h2>
                <p className="mt-1 text-base leading-6 text-blue-700">
                  En Aranjuez
                </p>
                <div className="mt-1">
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/X1oC6Rvi9nZahYLz9"
                    className="text-sm text-blue-700 hover:text-blue-500"
                  >
                    Ver en el mapa ↗
                  </a>
                </div>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="./images/finca.png"
              />
            </div>
          </div>
        </div>

        {/*  Hoteles */}
        <div className="relative bg-white mt-24 mb-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl flex flex-col items-center">
            <h2 className="text-xl font-extrabold tracking-wider text-blue-600 uppercase">
              Hoteles recomendados
            </h2>
            <div className="mt-12 text-left">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {hotels.map((hotel, index) => (
                  <div key={hotel.hotel} className="pt-6">
                    <div className="flow-root bg-blue-100 rounded-lg px-6 pb-8 min-h-full">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-blue-300 rounded-full text-white font-extrabold">
                            {hotel.stars}
                          </span>
                        </div>
                        <p className="mt-5 text-blue-400 uppercase text-xs">
                          Hotel
                        </p>
                        <p className="text-base text-blue-500">{hotel.hotel}</p>
                        <p className="mt-2 text-blue-400 uppercase text-xs">
                          Donde
                        </p>
                        <p className="text-base text-blue-500">{hotel.place}</p>
                        <p className="mt-2 text-blue-400 uppercase text-xs">
                          Teléfono
                        </p>
                        <p className="text-base text-blue-500">{hotel.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div
          className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
          id="form"
        >
          <div className="relative max-w-xl mx-auto">
            <div className="flex justify-center">
              <img className="w-96" src="./images/footer.png" />
            </div>
            <div className="text-center mt-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Confirma tu asistencia
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Por favor, rellena el formulario para confirmar tu asistencia a
                la boda
              </p>
            </div>
            <div className="mt-12">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("firstName")}
                      id="firstName"
                      type="text"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apellidos
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("lastName")}
                      type="text"
                      id="lastName"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="bus"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ¿Necesitarás autobus?
                  </label>
                  <Switch
                    control={control}
                    label="Necesitaré autobus"
                    name="bus"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="alergias"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ¿Tienes alguna alguna alergia o restricción alimentaria?
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register("alergias")}
                      id="alergias"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Confirmar asistencia
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center max-w-7xl mx-auto ">
            <img className="w-32 mt-16" src="./images/suitecase.png" />
          </div>
        </div>
      </main>
    </div>
  )
}
