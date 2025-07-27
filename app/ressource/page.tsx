'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons'
import ButtonDialog from "@/components/molecules/buttonDialog/buttonDialog";
import PageTable from "@/components/molecules/table/pageTable";
import { useState } from "react";
import AddRessourceForm from "@/components/organisms/form/addRessourceForm";
import IconButtonDialog from "@/components/molecules/buttonDialog/IconbuttonDialog";

const tableHeader = ['Name', 'Type']

export default function Ressource() {
  const [ressources, setRessources] = useLocalStorage<Ressource[]>("ressources", []);
  const [name, setName] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const addRessource = () => {
    const newRessource: Ressource = {
      id: Date.now(),
      name: name,
      type: 'podcast',
    };
    setRessources([...ressources, newRessource]);
    setName('')
    setNote('')
  };

  const getUserById = (id: number) => {
    return ressources.find(ressource => ressource.id === id);
  };

  const deleteUserById = (id: number) => {
    setRessources(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  const updateTask = (updatedTask: Ressource) => {
    setRessources(prevTasks =>
      prevTasks.map(task =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">My ressources</h2>
        <ButtonDialog title={"Add a ressource"} btnAction={addRessource} btnTitle={"New ressource"} lableAction={"Add"}>
          <AddRessourceForm name={name} setName={setName} note={note} setNote={setNote} />
        </ButtonDialog>
        <PageTable tableSize={ressources.length} tableHeader={tableHeader}>
          {ressources && ressources.map((data: Ressource, index) => (
            <tr key={index}>
              <th className="hidden lg:block">{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td className="flex justify-end">
                <IconButtonDialog title={"Delete a ressource"} iconTitle={faTrash} btnAction={() => deleteUserById(data.id)} color={"error"} lableAction={"Delete"}>
                  <p>Are you sure you want to delete this resource?</p>
                </IconButtonDialog>
                <button className="btn btn-circle btn-ghost hidden lg:block">
                  <FontAwesomeIcon icon={faPen} className="text-warning" />
                </button>
                <a href={`/ressource/${data.id}`} className="btn btn-circle btn-ghost">
                  <FontAwesomeIcon icon={faEye} className="text-primary" />
                </a>
              </td>
            </tr>
          ))}
        </PageTable>
      </div>
    </div>
  );
}
