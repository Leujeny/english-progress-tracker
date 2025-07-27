'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons'
import ButtonDialog from "@/components/buttonDialog";
import PageTable from "@/components/table/pageTable";

const myRessources: Ressource[] = [
  { id: 5, name: 'The last podcast', type: 'podcast' },
  { id: 4, name: 'another podcast', type: 'podcast' },
  { id: 3, name: 'JMA', type: 'podcast' },
  { id: 2, name: 'BCC News', type: 'text' },
  { id: 1, name: 'BBC learning english', type: 'video' },
]

const tableHeader = ['Name', 'Type']


export default function Ressource() {
  const [ressources, setRessources] = useLocalStorage<Ressource[]>("ressources", []);

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">My ressources</h2>
        <ButtonDialog children={undefined} title={"Add a ressource"} addSession={() => undefined} />
        <PageTable tableSize={myRessources.length} tableHeader={tableHeader}>
          {myRessources && myRessources.map((data: Ressource, index) => (
            <tr key={index}>
              <th className="hidden lg:block">{index + 1}</th>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td className="flex justify-end">
                <button className="btn btn-circle btn-ghost hidden lg:block">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="btn btn-circle btn-ghost hidden lg:block">
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <a href={`/ressource/${data.id}`} className="btn btn-circle btn-ghost">
                  <FontAwesomeIcon icon={faEye} />
                </a>
              </td>
            </tr>
          ))}
        </PageTable>
      </div>
    </div>
  );
}
