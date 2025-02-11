"use client";

import MessageCard from "@/components/cards/MessageCard";
import { NoData } from "@/components/shared/NoData";
import { TMessage, TMongoose } from "@/types/types";
import { baseUrl } from "@/utils/authOptions";
import { useEffect, useState } from "react";

const AllMessages = () => {
  const [data, setData] = useState<(TMessage & TMongoose)[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/messages`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);


  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold">All Messages</h1>
      </div>
      <div>
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-4">
            {data?.map((message) => (
              <MessageCard data={message} key={message?._id} />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default AllMessages;
