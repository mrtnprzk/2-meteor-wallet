import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import ErrorAlert from "./ErrorAlert";
import SuccessAlert from "./SuccessAlert";
// import { ContactsCollection } from "../../api/ContactsCollection"; //MiniMongo

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const saveContact = () => {
      // ContactsCollection.insert({ name, email, imageUrl }); //MiniMongo
      Meteor.call("contacts.insert", { name, email, imageUrl }, (errorResponse) => {
        if (errorResponse) {
          setErrorMessage(errorResponse.error);
          setSuccessMessage("");
        } else {
          setName("");
          setEmail("");
          setImageUrl("");
          setErrorMessage("");
          setSuccessMessage("Contact saved.");

          setTimeout(() => {
            setSuccessMessage("");
          }, "7000");
        }
      });
      
    };

  return (
    <form className="m-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      {errorMessage && <ErrorAlert message={errorMessage} />}
      {successMessage && <SuccessAlert message={successMessage} />}
      <div className="px-2 py-3 text-center">
        <button
          type="button"
          onClick={saveContact}
          className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Save Contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm