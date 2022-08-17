import React from "react"
import { Switch } from "@headlessui/react"
import { Control, Controller } from "react-hook-form"

type Props = {
  control: Control<any>
  name: string
  label: string
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const MySwitch = ({ control, name, label }: Props) => {
  return (
    <div className="flex items-start mt-4">
      <div className="flex-shrink-0">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Switch
              checked={field.value}
              onChange={field.onChange}
              className={classNames(
                field.value ? "bg-blue-600" : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  field.value ? "translate-x-5" : "translate-x-0",
                  "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
          )}
        />
      </div>
      <div className="ml-3">
        <p className="text-base text-gray-500">{label}</p>
      </div>
    </div>
  )
}

export default MySwitch
