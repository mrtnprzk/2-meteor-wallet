import React, {useState} from "react";
import { ContactsCollection } from "../../api/ContactsCollection";
import { useTracker, useSubscribe, useFind } from "meteor/react-meteor-data";
import RemoveAlert from "./RemoveAlert";
import ContactItem from "./ContactItem";

const ContactList = () => {

  const [removeMessage, setRemoveMessage] = useState("");

  const isLoading = useSubscribe("contacts");
  const contacts = useFind(() => ContactsCollection.find({}, { sort: { createdAt: -1 } }));

  // const contacts = useTracker(() => {
  //   return ContactsCollection.find({}, {sort: { createdAt: -1 }}).fetch(); //Tracker 
  // });
  
  if (isLoading()) {
    return (
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Loading...
        </h3>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        {removeMessage && <RemoveAlert message={removeMessage} />}
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} setRemoveMessage={setRemoveMessage}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactList;