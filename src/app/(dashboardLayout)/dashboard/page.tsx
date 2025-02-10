import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-3xl mx-auto">Welcome {session?.user?.name}</h1>
    </div>
  );
};

export default ProfilePage;
