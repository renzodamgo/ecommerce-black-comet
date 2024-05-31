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
    <main className="">
      <TextBar />
      <TopMenu />
      {children}
      <InfoFooter />
      <Footer />
    </main>
  );
}
