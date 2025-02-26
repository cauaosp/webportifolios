import { ContactForms } from "../components/contact/forms";
import {
  Footer,
  PortifolioDownload,
  Profile,
  TopMenu,
} from "../components/shared";

export default function Contact() {
  return (
    <>
      <TopMenu />
      <PortifolioDownload />
      <div className="grid grid-cols-3 p-5 2xl:pt-10 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden 2xl:mt-8">
        <Profile />
        <ContactForms />
      </div>
      <Footer />
    </>
  );
}
