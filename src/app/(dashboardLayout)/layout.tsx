import Dashboard from "@/components/shared/Dashboard";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <BackgroundBeamsWithCollision className="min-h-fit items-start">
      <div className="">
        <Navbar dashboard={true} user={session?.user} />

        <div className="flex">
          <Dashboard />
          <div className="container px-5 py-2">{children}</div>
        </div>
        <Footer />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
