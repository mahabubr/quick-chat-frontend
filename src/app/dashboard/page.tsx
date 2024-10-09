import DashNav from "@/components/dashboard/DashNav";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import CreateChat from "@/components/chatGroup/CreateChat";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";

const Dashboard = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<ChatGroupType> | [] = await fetchChatGroups(
    session?.user?.token!
  );

  console.log({ groups });
  return (
    <div>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image! ?? undefined}
      />
      <div className="container mx-auto">
        <div className="flex justify-end mt-10">
          <CreateChat user={session?.user!} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.length > 0 &&
            groups.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session?.user!} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
