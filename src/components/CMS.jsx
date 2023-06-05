import { useState, useEffect } from "react";

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [dogName, setDogName] = useState("");
  const [dogType, setDogType] = useState("");

  const [editingDog, setEditingDog] = useState({ name: "", type: "" });

  function createDog() {
    const newDog = { name: dogName, type: dogType };

    setDogs([...dogs, newDog]);
  }
}

function updateDog(dogToUpdate) {
  const index = dogs.findIndex((dog) => dog.name === dogToUpdate);
  const updatedDogs = [...dogs];
  updatedDogs[index] = dogToUpdate;
  setDogs(...dogs, updatedDogs);

  function deleteDog(dogToDelete) {
    const index = dogs.findIndex((dog) => dog.name === dogToDelete.name);
    const updatedDogs = [...dogs];
    updatedDogs.splice(index, 1);
    setDogs(updatedDogs);
  }

  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>

      <form onSubmit={createDog}>
        <input
          type="text"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
        />
        <input
          type="text"
          value={dogType}
          onChange={(e) => setDogType(e.target.value)}
        />
      </form>

      <form onSubmit={updateDog()}>
        <input
          type="text"
          name="name"
          value={editingDog.name}
          onChange={(e) =>
            setEditingDog({ ...editingDog, [e.target.value]: e.target.value })
          }
        />
        <input
          type="text"
          value={editingDog.type}
          onChange={(e) =>
            setEditingDog({ ...editingDog, [e.target.value]: e.target.value })
          }
        />
      </form>
    </>
  );
}
