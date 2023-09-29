import React from "react";
import { languages, skills } from "../assets/data";
import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}
      inital={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi I'm
        <br />
        <span className="bg-white px-1 italic">Ellen Wang</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I like making cool web Applications and explore new features!
        <br />
        Right now, I'm learning 3D and Animation
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Check my work
      </motion.button>
    </Section>
  );
};

const SkillSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className="mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <h3 className="text-xl font-bold text-gray-800">{lng.title}</h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${lng.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  const inputClassName = `block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3`;
  const textareaClassName = `${inputClassName} w-full`;
  const labelClassName = `font-medium text-gray-900 block mb-1 mt-8`;
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label for="name" className={labelClassName}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={inputClassName}
          ></input>

          <label for="email" className={labelClassName}>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className={inputClassName}
          ></input>

          <label for="message" className={labelClassName}>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            className={textareaClassName}
          ></textarea>
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold mt-16">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
