"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const ContactForms = ({ ...props }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_snb4dwk", "template_x340wts", form.current, {
          publicKey: "qmmLrjbA19EJhKSdU",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            if (form.current) form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`text-white text-justify grid grid-cols-2 grid-rows-4 gap-x-5 px-2 2xl:h-[30rem] 2xl:text-lg max-md:gap-y-1 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-gray-900 ${
        props.isMobile ? "mt-5" : "col-span-2"
      }`}
    >
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="" className="font-bold">
          Nome
        </label>
        <input
          className="border border-white bg-white rounded-lg text-gray-950 p-1"
          type="text"
          name="user_name"
          placeholder="Cauã OSP"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="" className="font-bold">
          Email
        </label>
        <input
          className="border border-white bg-white rounded-lg text-gray-950 p-1"
          type="email"
          name="user_email"
          placeholder="cauaosp20@gmail.com"
        />
      </div>
      <div className="col-span-2 row-span-2 mt-1 flex flex-col gap-2 h-fit">
        <label htmlFor="" className="font-bold">
          Mensagem
        </label>
        <textarea
          className=" border border-white w-full md:min-h-36 md:max-h-64 2xl:min-h-48 max-h-72 bg-white rounded-lg text-gray-950 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-white select-text p-1 max-md:max-h-48"
          name="message"
          placeholder="Digite sua mensagem"
        />
      </div>
      <input
        className="border border-white/25 w-fit h-fit py-1 px-2 rounded-lg bg-white/10 cursor-pointer hover:bg-white/20 font-bold mt-1"
        type="submit"
        value="Enviar"
      />
    </form>
  );
};
