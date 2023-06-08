import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Field from "../components/fields";
import Client from "../components/client";
import { useMutation } from "react-query";
import ClientModal from "../components/modal";
import useClient from "../hooks/useClient";

const initialValues = {
  nom: "",
  adresse: "",
  telephone: "",
  sousDomaine: "",
};
const createClientSchema = Yup.object().shape({
  nom: Yup.string().required("You Must Enter the Client Name"),
  adresse: Yup.string().required("You Must Enter the Client Address"),
  telephone: Yup.string()
    .min(10)
    .max(30)
    .required("You Must Enter The Client Phone Number"),
  sousDomaine: Yup.string().required("Enter a SubDomain for This Client"),
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
  const [isShowing, setIsShowing] = useState(false);

  const handleClientSubmit = async (values) => {
    console.log(values);
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/client/createClient",
        {
          ...values,
        }
      );

      console.log(resp);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full pt-20 flex flex-col px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <button
        onClick={() => setIsShowing((prev) => !prev)}
        className="items-center justify-center px-4 py-3 max-w-[200px] text-base font-semibold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-md inline-flex hover:bg-slate-800 focus:bg-slate-800"
      >
        {isShowing ? "Close Form" : "Add Client"}
      </button>
      {isShowing && (
        <div className="mt-6 flex flex-col">
          <Formik
            initialValues={initialValues}
            validationSchema={createClientSchema}
            onSubmit={handleClientSubmit}
          >
            {({
              isValid,
              isSubmitting,
              errors,
              values,
              handleBlur,
              handleSubmit,
              handleChange,
              touched,
            }) => (
              <Form className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-1">
                <Field
                  name="nom"
                  label="Client Name"
                  type="text"
                  placeholder="Enter Client Name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.nom}
                  touched={touched.nom}
                  error={errors.nom}
                />

                <Field
                  name="adresse"
                  label="Client Address"
                  type="test"
                  placeholder="Enter The Client address"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.adresse}
                  touched={touched.adresse}
                  error={errors.adresse}
                />
                <Field
                  name="telephone"
                  label="Client Phone"
                  type="text"
                  placeholder="Enter Client Phone"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.telephone}
                  touched={touched.telephone}
                  error={errors.telephone}
                />
                <Field
                  name="sousDomaine"
                  label="Client Subdomain"
                  type="text"
                  placeholder="Enter Client Sub Domain"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.sousDomaine}
                  touched={touched.sousDomaine}
                  error={errors.sousDomaine}
                />
                <button
                  onClick={handleSubmit}
                  className="items-center justify-center px-4 py-3 max-w-[200px] text-base font-semibold text-white transition-all duration-200 bg-slate-900 border border-transparent rounded-md inline-flex hover:bg-slate-800 focus:bg-slate-800"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
      <div className="w-full mt-20 grid gap-x-4 gap-y-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
        {clients.map((client) => (
          <Client data={client} key={client.id} />
        ))}
      </div>
    </div>
  );
};

export default ClientsScreen;
