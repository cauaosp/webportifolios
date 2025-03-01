import { Profile } from "../shared";
import { ContactForms } from "./forms";

export const ContactContent = () => {
  return (
    <div className="grid grid-cols-3 p-5 2xl:pt-10 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden 2xl:mt-8">
      <Profile />
      <ContactForms />
    </div>
  );
};
