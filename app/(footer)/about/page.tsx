export default function About() {

  return (

    <>
      <div className="card">
        <div className="card-body">
          <h1 className="text-5xl">À propos de ce projet</h1>
        </div>
      </div>
      <h2 className="card-title p-3">Objectif</h2>
      <div className="card">
        <div className="card-body">
          <p>Ce projet a été conçu pour m'aider à suivre ma progression en anglais, de manière simple et personnalisée. Il est entièrement stocké dans le navigateur via LocalStorage, ce qui garantit la confidentialité des données.</p>
        </div>
      </div>
      <h2 className="card-title p-3">Stack technique</h2>
      <div className="card">
        <div className="card-body">
          <p>Le projet est construit avec Next.js, TailwindCSS, DaisyUI, et utilise LocalStorage pour la persistance.</p>
        </div>
      </div>
    </>
  );
}
