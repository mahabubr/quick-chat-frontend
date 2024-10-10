"use client";

import { getSocket } from "@/lib/socket.config";
import { useEffect, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { Button } from "../ui/button";

export default function ChatBase({ groupId }: { groupId: string }) {
  const socket = useMemo(() => {
    const socket = getSocket();

    socket.auth = {
      room: groupId,
    };

    return socket.connect();
  }, []);

  useEffect(() => {
    socket.on("message", (data: any) => {
      console.log("The socket is : ", data);
    });

    return () => {
      socket.close();
    };
  }, []);

  const handleClick = () => {
    socket.emit("message", { name: "Tony Stark", id: uuidV4() });
  };

  return (
    <div className="flex">
      <Button onClick={handleClick}>Send Message</Button>
    </div>
  );
}
