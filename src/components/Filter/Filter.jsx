export const Filter = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         value={filter}
  //         onChange={e => {
  //           this.handleFilterChange(e.target.value);
  //         }}
  //       />
  //       <ul>
  //         {filteredContacts.map(contact => (
  //           <li key={contact.id}>
  //             {contact.name}: {contact.number}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
};
