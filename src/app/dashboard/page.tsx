import DashNav from "@/components/dashboard/DashNav";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image! ?? undefined}
      />
    </div>
  );
};

export default Dashboard;
