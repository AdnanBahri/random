import React from "react";
import { MdOutlineFingerprint, MdOutlineAlternateEmail } from "react-icons/md";
import Error from "../error";

const Field = ({
  name,
  label,
  type,
  placeholder,
  handleChange,
  handleBlur,
  value,
  touched,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="text-base font-medium text-gray-900 dark:text-gray-500"
      >
        {label}
      </label>
      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {name === "email" ? (
            <MdOutlineAlternateEmail size={24} />
          ) : (
            <MdOutlineFingerprint size={24} />
          )}
        </div> */}

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full py-4 pl-10 pr-4 text-black dark:text-gray-50 placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 dark:bg-slate-800 dark:border-gray-800 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
        />
      </div>
      <Error error={error} touched={touched} />
    </div>
  );
};

export default Field;
