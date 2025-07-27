import Link from "next/link";
import TypeAvatar from "../avatar/typeAvatar";

interface Props {
    datas: Ressource[],
}

export default function FavoriteRessourceCard({ datas }: Props) {
    return (
        <div className="mt-8">
            <h2 className="card-title p-3">My favorite podcasts</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                {datas && datas.map((data: any) => (
                    <Link key={data.id} href={`/ressource/${data.id}`}>
                        <div className="card card-border bg-base-100">
                            <div className="card-body">
                                <div className="flex">
                                    <TypeAvatar type={data.type} />
                                    <h2 className="ml-2 card-title">{data.name}</h2>
                                </div>
                                {/* <p>[nom du podcast] {data.name}</p> */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
