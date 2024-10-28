import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactsPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full">
      <FontAwesomeIcon icon={faAddressBook} fontSize={50} />
      <p>Select a contact to see its details</p>
    </div>
  );
}
