import ChatBase from "@/components/chats/ChatBase";
import { fetchChats } from "@/fetch/chatsFetch";
import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
import { notFound } from "next/navigation";

const Chat = async ({ params }: { params: { id: string } }) => {
  if (params.id.length !== 36) {
    return notFound();
  }

  const group: ChatGroupType | null = await fetchChatGroup(params.id);

  if (group === null) {
    return notFound();
  }

  const users: Array<GroupChatUserType> | [] = await fetchChatGroupUsers(
    params.id
  );

  const chats: Array<MessageType> | [] = await fetchChats(params.id);

  return (
    <div>
      <ChatBase group={group} users={users} oldMessages={chats} />
    </div>
  );
};

export default Chat;
