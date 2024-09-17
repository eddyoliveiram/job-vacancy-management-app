import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

// Header component
function Header() {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold">Gerenciador de Vagas</h1>
            </div>
        </header>
    );
}

// Footer component
function Footer() {
    return (
        <footer className="bg-blue-600 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Gerenciador de Vagas. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        </body>
        </html>
    );
}

