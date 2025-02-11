import { Metadata } from "next";
import AllMessages from "./AllMessages";

export const metadata: Metadata = {
  title: "Dashboard | Message",
  description: "Add, Edit, Delete, and View Messages",
};

const MessagePage = () => {
  return (
    <div>
      <AllMessages />
    </div>
  );
};

export default MessagePage;
