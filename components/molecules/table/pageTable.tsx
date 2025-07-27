'use client'

interface Props {
    children: React.ReactNode,
    tableSize: number,
    tableHeader: string[],
}

export default function PageTable({ children, tableHeader, tableSize }: Props) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th className="hidden lg:block"></th>
                        {tableHeader.map((data: any, index: number) => (
                            <th key={index}>{data}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
                {(tableSize > 12) && (
                    <tfoot>
                        <tr>
                            <th className="hidden lg:block"></th>
                            {tableHeader.map((data: any, index: number) => (
                                <th key={index}>{data}</th>
                            ))}
                            <th></th>
                        </tr>
                    </tfoot>
                )}
            </table>
        </div>
    );
}
