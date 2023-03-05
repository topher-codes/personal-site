import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="w-screen h-screen p-6 candy-mesh">
        <GlassPane className="flex items-center w-full h-full ">
          <Sidebar />
          <div className="flex flex-col items-center w-full h-full">
            <div className="flex flex-row items-center w-full ">
              <Header />
            </div>
            {children}
          </div>
        </GlassPane>
        <div id="modal" />
      </body>
    </html>
  );
}
