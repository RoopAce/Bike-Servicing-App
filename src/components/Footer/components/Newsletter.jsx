import { useState } from "react";

import Input from "../../Form/Input";

export const Newsletter = () => {
  const [newsletterInput, setNewsletterInput] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    setNewsletterInput("");
  };

  const handleChange = (e) => {
    setNewsletterInput(e.target.value);
  };

  return (
    <div>
      <h3 className="text-white text-[18px] font-bold mb-[8px]">Newsletter</h3>
      <form onSubmit={handleNewsletter}>
        <Input
          onChange={handleChange}
          className="text-black py-[8px] px-[12px] w-full rounded-md bg-white"
          type="email"
          value={newsletterInput}
          placeholder="Enter your email address"
        />
      </form>
    </div>
  );
};
