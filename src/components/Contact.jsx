import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
import toast from "react-hot-toast";

//

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all the fields.");
      return;
    }

    setLoading(true);
    emailjs
      .send(
        "service_w86xmuh",
        "template_dfo1933",
        {
          from_name: form.name,
          to_name: "Ahsan",
          from_email: form.email,
          message: form.message,
        },
        "7LrusVDJgZj5-feHZ"
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank you. I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
        toast.error("Something went wrong..!");
      });
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.80] h-fit bg-black-100 p-8 rounded-2xl "
      >
        <p className={`${styles.sectionSubText} !text-[15px]`}>Get in touch</p>
        <p className={`${styles.sectionHeadText} !text-[45px]`}>Contact.</p>

        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "submiting..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
