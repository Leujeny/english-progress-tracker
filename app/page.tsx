'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import LastSessionCard from "@/components/card/lastSessionCard";
import AddSessionButtonModal from "@/components/buttonModal/addSessionButtonModal";
import FavoriteRessourceCard from "@/components/card/favoriteRessourceCard";

const myRessources: Ressource[] = [
  { id: 5, name: 'The last podcast', type: 'podcast' },
  { id: 4, name: 'another podcast', type: 'podcast' },
  { id: 3, name: 'JMA', type: 'podcast' },
  { id: 2, name: 'BCC News', type: 'text' },
  { id: 1, name: 'BBC learning english', type: 'video' },
]

const myGrades = [
  { id: 5, date: '23/07/2025', grade: '424' },
  { id: 4, date: '14/06/2025', grade: '417' },
  { id: 3, date: '11/04/2025', grade: '382' },
  { id: 2, date: '29/03/2025', grade: '382' },
  { id: 1, date: '01/01/2025', grade: '400' },
]

export default function Home() {

  // const [levels, setLevels] = useLocalStorage<Level[]>("english_levels", []);
  const [sessions, setSessions] = useLocalStorage<Session[]>("sessions", []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="card bg-base-100 col-span-4 lg:col-span-2">
          <div className="card-body">
            <p>Les données sont stockées dans votre navigateur <em>(local storage)</em></p>
            <p>Aucune données n'est donc stockée sur le serveur</p>
            <AddSessionButtonModal sessions={sessions} setSessions={setSessions} />
          </div>
        </div>
        <div className="stats shadow bg-base-100 col-span-2 lg:col-span-1">
          <div className="stat place-items-center">
            <div className="stat-title">Viewed ressources</div>
            <div className="stat-value">150</div>
            <div className="stat-desc">+ 12</div>
          </div>
        </div>
        <div className="stats shadow bg-base-100 col-span-2 lg:col-span-1">
          <div className="stat place-items-center">
            <div className="stat-title">Level</div>
            <div className="stat-value">B2</div>
            <div className="stat-desc">↗︎ 424 (22%)</div>
          </div>
        </div>
      </div>
      <LastSessionCard datas={sessions} />
      <FavoriteRessourceCard datas={myRessources} />
      <div className="grid grid-cols-4 gap-4">
        
        {/* <MyRessourceCard datas={myRessources} /> */}
        {/* <MyLevelCard datas={myGrades} /> */}
      </div>
    </>
  );
}
