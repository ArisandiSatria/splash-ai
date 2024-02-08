import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getAPiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getAPiLimitCount();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-80 md:flex-col md:fixed md:inset-y-0 bg-[#16164c]">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-80">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
