import { useState } from "react";

export default function Info() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [persInfo, setPersInfo] = useState([]);

  function infoSubmission(event) {
    event.preventDefault();
    const newInfo = {
      first: firstName,
      last: lastName,
      address: address,
      number: phoneNumber,
    };
    setPersInfo([...persInfo, newInfo]);
  }

  return (
    <div>
      <form onSubmit={infoSubmission}>
        <h1>Personal Info</h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(event) => setAddress(event.target.value)}
          required
        />
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="(xxx)-xxx-xxxx"
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
        <input type="submit" />
      </form>
      {persInfo.map((info, index) => (
        <div key={info.number}>
          <div>{info.first}</div>
          <div>{info.last}</div>
          <div>{info.address}</div>
          <div>{info.number}</div>
        </div>
      ))}
    </div>
  );
}
