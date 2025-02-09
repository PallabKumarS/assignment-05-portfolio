import Dashboard from "@/components/shared/Dashboard";
import Navbar from "@/components/shared/Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen items-start">
      <div>
        <Navbar dashboard={true} />

        <div className="flex min-h-screen">
          <Dashboard />
          <div className="container md:px-5 lg:ml-60 py-2">{children}</div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
