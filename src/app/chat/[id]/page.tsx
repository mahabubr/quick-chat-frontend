import ChatBase from "@/components/chats/ChatBase";

const Chat = ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  return (
    <div>
      <h1>Hello I Am Chat</h1>
      <ChatBase groupId={params.id} />
    </div>
  );
};

export default Chat;
