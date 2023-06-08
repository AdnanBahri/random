import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Field from "../components/fields";
import Client from "../components/client";

const initialValues = {
  email: "",
  password: "",
};
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a Valid Email")
    .required("You Must Enter your Email Address"),
  password: Yup.string().min(5).max(50).required("You Must Enter the Password"),
});

const clients = [
  {
    id: 1,
    name: "Client 1",
    telephone: "1234567890",
    address: "Address 1",
    subdomain: "client1",
  },
  {
    id: 2,
    name: "Client 2",
    telephone: "0987654321",
    address: "Address 2",
    subdomain: "client2",
  },
  {
    id: 3,
    name: "Client 2",
    telephone: "0987654321",
    address: "Address 2",
    subdomain: "client2",
  },
  {
    id: 4,
    name: "Client 2",
    telephone: "0987654321",
    address: "Address 2",
    subdomain: "client2",
  },
  {
    id: 5,
    name: "Client 2",
    telephone: "0987654321",
    address: "Address 2",
    subdomain: "client2",
  },
  {
    id: 6,
    name: "Client 2",
    telephone: "0987654321",
    address: "Address 2",
    subdomain: "client2",
  },
];

const ClientsScreen = () => {
  const navigate = useNavigate();
  // const { user, logIn } = useAuth();

  const handleLogin = async (values) => {
    console.log("login");
    // try {
    //   const resp = await logIn(values.email, values.password);
    //   console.log(resp);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // useEffect(() => {
  //   if (user) navigate("/", { replace: true });
  // }, [user]);
  return (
    <div className="h-full pt-20 flex flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <button className="items-center justify-center px-4 py-3 max-w-[200px] text-base font-semibold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-md inline-flex hover:bg-slate-800 focus:bg-slate-800">
        Add Client
      </button>
      <div className="w-full mt-20 grid gap-x-4 gap-y-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
        {clients.map((client) => (
          <Client data={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientsScreen;
