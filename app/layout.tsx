import "./globals.css";

export const metadata = {
    title: "Travel",
    description: "Travel UI/UX App for Camping",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <main className="relative overflow-hidden">{children}</main>
        </body>
        </html>
    );
}
