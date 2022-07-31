import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "./ContactsCollection";

Meteor.publish("contacts", function publishContacts() {
  return ContactsCollection.find(); //We are returning CURSOR (Life Query)
});