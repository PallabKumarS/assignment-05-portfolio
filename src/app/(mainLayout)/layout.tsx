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
        <Navbar />
        {children}
      </div>
    </BackgroundBeamsWithCollision>
  );
}
