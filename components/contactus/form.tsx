import { Icon } from "@iconify/react";
import React, { useState } from "react";
import tw from "tailwind-styled-components";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setLoading(true);
    setIsSuccess(false);

    fetch("mailer/mailer.php", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ name, email, subject, message, phone }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 10000);

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-bgcontactform bg-no-repeat bg-cover rounded-[8px] lg:p-12 p-4  ">
      <h6 className="text-[#1C1C1C] font-roboto text-[24px] font-bold">
        Contact With Us{" "}
      </h6>
      <p className="text-[#61657E] text-[12px] font-sans mt-1 lg:mb-8 mb-3">
        Send us a message and we&apos;ll respond as soon as possible{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="Name*"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email*"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <Input
            type="tel"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <Textarea
          placeholder="Your Message here"
          rows={8}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {isSuccess && (
          <div
            className="flex items-center px-4 py-5 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Email successfully sent</span>
            </div>
          </div>
        )}

        <Button type="submit" disabled={loading}>
          Send Message <Icon icon="ph:arrow-right-bold"></Icon>
        </Button>
      </form>
    </div>
  );
};

const Button = tw.button`bg-[#E47B0E] justify-center w-full text-white rounded-[3px] lg:py-3 lg:px-8 py-2 px-4 font-[400] text-[13.5px] font-poppins flex items-center gap-2 hover:opacity-80 disabled:bg-gray-500`;
const Input = tw.input`border-[1px] border-[#F4F6FF] p-[.6rem] outline-0 rounded-[9px] placeholder:text-xs text-sm`;
const Textarea = tw.textarea`border-[1px] border-[#F4F6FF] p-[.6rem] outline-0 rounded-[9px] placeholder:text-xs text-sm mb-4 w-full`;
export default ContactForm;
