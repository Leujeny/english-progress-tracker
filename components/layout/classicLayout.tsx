import { Dispatch, SetStateAction } from "react";
import Header from "../header";
import Footer from "../footer";

interface Props {
    children: any
}

export default function ClassicLayout({ children }: Props) {
    return (
        <>
            <Header />
            <main className="min-h-screen mx-auto py-4 container">
                {children}
            </main>
            <Footer />
        </>
    );
}
