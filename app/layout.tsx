import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardRootLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head />
      <body className="w-screen h-screen candy-mesh">
        <GlassPane className="flex items-center w-full h-full ">
          <Sidebar />
          <div className=" w-full h-full  items-stretch justify-center min-h-[content]">
            <div className="flex flex-grow">
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
