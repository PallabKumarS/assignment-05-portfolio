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
        <div className="">
          <Navbar user={session?.user} />
        </div>
        <div className="h-full">{children}</div>
        <Footer />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
