import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ViewedRessourceCard from "@/components/card/viewedRessourceCard";
import MyRessourceCard from "@/components/card/myRessourceCard";
import MyLevelCard from "@/components/card/myLevelCard";

const myViewedRessources = [
  { id: 5, date: '23/07/2025', name: 'Mon Texte', type: 'text' },
  { id: 4, date: '23/07/2025', name: 'Mon podcast', type: 'podcast' },
  { id: 3, date: '22/07/2025', name: 'Ma video', type: 'video' },
  { id: 2, date: '21/07/2025', name: 'BBC text', type: 'text' },
  { id: 1, date: '20/07/2025', name: 'Wiki text', type: 'text' },
]

const myRessources = [
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
  return (
    <>
      <Header />
      <main className="min-h-screen mx-auto py-4 container">
        <div className="grid grid-cols-4 gap-4">
          <ViewedRessourceCard datas={myViewedRessources} />
          <MyRessourceCard datas={myRessources} />
          <MyLevelCard datas={myGrades} />
        </div>
      </main>
      <Footer />
    </>
  );
}
