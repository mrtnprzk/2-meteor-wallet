import React, { memo } from "react";

const ContactItem = memo(({ contact, setRemoveMessage }) => {
  const removeContact = (id, name) => {
    Meteor.call("contacts.remove", { contactId: id }, (errorResponse) => {
      if (errorResponse) {
        console.log(errorResponse);
      } else {
        setRemoveMessage(`${name} removed from contact list`);
        setTimeout(() => {
          setRemoveMessage("");
        }, "5000");
      }
    });
  };

  return (
    <li className="py-4 flex items-center justify-between space-x-3">
      <div className="min-w-0 flex-1 flex items-center space-x-3">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            //img url generator https://vinicius73.github.io/gravatar-url-generator/#/dicebear
            src={contact.imageUrl}
            alt="avatar"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900 truncate">
            {contact.name}
          </p>
          <p className="text-sm font-medium text-gray-500 truncate">
            {contact.email}
          </p>
        </div>
        <div>
          <button
            onClick={() => removeContact(contact._id, contact.name)}
            className="inline-flex items-center shadow-md px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:py-1 duration-200"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
});

export default ContactItem;