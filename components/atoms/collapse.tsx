import { Children, Dispatch, SetStateAction } from "react";

interface Props {
    title: string,
    children: React.ReactNode,
}

export default function Collapse({ title, children}: Props) {
    return (
        <div className="collapse collapse-arrow border-base-300 border">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">{title}</div>
            <div className="collapse-content text-sm">
                {children}
            </div>
        </div>
    );
}
