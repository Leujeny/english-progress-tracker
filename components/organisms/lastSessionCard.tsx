import Link from "next/link";
import TypeAvatar from "../atoms/avatar/typeAvatar";

interface Props {
    datas: Session[],
}

export default function LastSessionCard({ datas }: Props) {
    return (
        <div className="mt-8">
            <h2 className="card-title p-3">My recent sessions</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                {datas && datas.map((data: any) => (
                    <Link key={data.id} href={`/session/${data.id}`}>
                        <div className="card card-border bg-base-100">
                            <div className="card-body">
                                <div className="flex">
                                    <TypeAvatar type={data.type} />
                                    <h2 className="ml-2 card-title">Ep: {data.episode}</h2>
                                </div>
                                <p>{data.podcast}</p>
                                <div className="hidden lg:block">
                                    <div className="divider mx-auto w-4/5" />
                                    <div className="flex flex-wrap">
                                        <div className="badge badge-soft badge-primary">{data.date}</div>
                                        {data?.difficulty && (
                                            <div className="ml-2 badge badge-soft badge-primary">{data.difficulty}</div>
                                        )}
                                        {data?.grade && (
                                            <div className="ml-2 badge badge-soft badge-primary">{data.grade} / 10</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
