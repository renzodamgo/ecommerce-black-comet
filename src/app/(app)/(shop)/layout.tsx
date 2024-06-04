import { Sidebar } from "@/components/products/sidebar/sidebar";
import { Footer } from "@/components/ui/footer/footer";
import { InfoFooter } from "@/components/ui/footer/info-footer";
import { TextBar } from "@/components/ui/text-bar/text-bar";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen min-w-[100vw] justify-start">
      <Sidebar />
      <TextBar />
      <TopMenu />
      <main className="">
        {children}
        <InfoFooter />
      </main>
      <Footer />
    </div>
  );
}
