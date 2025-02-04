import { ContactForms } from "../components/contact/forms";
import { PortifolioDownload, Profile } from "../components/homepage";
import { Footer, TopMenu } from "../components/shared";

export default function Contact() {
  return (
    <div className="grid gap-2 md:gap-6 h-screen bg-gray-950 p-5 pb-1 px-36 select-none">
      <TopMenu />
      <PortifolioDownload />
      <div className="grid grid-cols-3 p-5 2xl:pt-10 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden 2xl:mt-8">
        <Profile />
        <ContactForms />
      </div>
      <Footer />
    </div>
  );
}
