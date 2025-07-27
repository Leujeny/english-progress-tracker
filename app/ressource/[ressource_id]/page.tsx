'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons'

export default function ViewRessource() {
  const [sessions, setSessions] = useLocalStorage<Session[]>("sessions", []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-sm col col-span-3 lg:col-span-2">
          <div className="card-body">
            <h1 className="text-5xl"> Ici le titre</h1>
            <p className="mt-2 text-lg text-base-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam lobortis dui nec commodo.
              In a augue nec metus pulvinar congue eget tempor est. Nunc consectetur mauris dui. Mauris nec diam non nisl faucibus condimentum.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm col-span-3 lg:col-span-1">
          <div className="card-body">
            <h2 className="card-title mt-2">Episode : Nom de l'episode</h2>
            <div className="flex mt-2">
              <div className="badge badge-soft badge-primary">12/12/2012</div>
              <div className="ml-2 badge badge-soft badge-primary">Type</div>
            </div>
            <div className="flex mt-2 justify-end">
              <p>Difficulty : <span className="badge badge-soft badge-success">high</span></p>
              <p>Comprehension: <span className="badge badge-soft badge-warning">5/10</span></p>
            </div>

            <div className="flex">
              <button className="btn btn-circle btn-ghost">
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className="btn btn-circle btn-ghost">
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm mt-4">
        <div className="card-body">
          <h1 className="m-auto text-2xl"> Ici le titre</h1>
          <p className="mt-2 mx-auto hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam lobortis dui nec commodo. In a augue nec metus pulvinar congue eget tempor est. Nunc consectetur mauris dui. Mauris nec diam non nisl faucibus condimentum.</p>
        </div>
      </div>
    </>
  );
}
