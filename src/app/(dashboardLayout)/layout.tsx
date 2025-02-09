import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar dashboard={true} />

      <div className="flex">
        <Dashboard />
        <div className="container md:px-5 lg:ml-60 py-2">{children}</div>
      </div>
    </div>
  );
}
