import Image from "next/image";
import { logoFont } from "@/config/fonts";
import { InstagramIcon, MailIcon } from "lucide-react";

export const InfoFooter = () => {
  return (
    <section id="contact-information" className="bg-slate-950">
      <div className="px-6 md:px-14 py-6 text-secondary-foreground mx-auto max-w-[1200px]">
        <Image
          className="invert"
          src={"/imgs/blackcomettext.png"}
          width={200}
          height={200}
          alt="Black Comet Logo"
        />
        <div className="mt-6">
          <h3 className={`${logoFont.className} text-xl`}>Contáctanos</h3>
          <div className="grid py-2 gap-2">
            <a
              className="hover:underline flex items-center "
              href="mailto:contacto@blackcomet3d.com"
            >
              <MailIcon size={24} className="mr-2" />
              contacto@blackcomet3d.com
            </a>

            <a
              className="hover:underline flex items-center "
              href="https://www.instagram.com/blackcomet3d/"
            >
              <InstagramIcon size={24} className="mr-2" />
              blackcomet3d
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
