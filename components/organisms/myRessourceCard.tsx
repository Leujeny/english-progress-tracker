import TypeAvatar from "../atoms/avatar/typeAvatar";
interface Props {
  datas: any,
}
export default function MyRessourceCard({ datas }: Props) {
  return (
    <div className="card bg-base-100 shadow-sm col-span-4 sm:col-span-2 lg:col-span-1">
      <div className="card-body">
        <h2 className="card-title">My ressources</h2>
        <ul className="list rounded-box">
          {datas && datas.map((data: any) => (
            <li className="list-row" key={data.id}>
              <TypeAvatar type={data.type} />
              <div className="my-auto">
                <p>{data.name}</p>
                <p className="text-xs uppercase font-semibold opacity-60">{data.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
