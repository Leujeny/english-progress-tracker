import Header from "../../organisms/header";
import Footer from "../../organisms/footer";

interface Props {
    children: React.ReactNode;
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
