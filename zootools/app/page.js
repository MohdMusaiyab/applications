"use client";
import React from "react";
import {
  Send,
  Code,
  Terminal,
  Globe,
  Wrench,
  Layer,
  Database,
  Server,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#000000] text-gray-100 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Application Header */}
        <header className="bg-gradient-to-br from-[#1F1F1F] to-[#2C2C2C] rounded-2xl shadow-2xl p-8 mb-12 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Column */}
            <div className="flex-1 md:mr-6">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6A11CB] to-[#2575FC] mb-4">
                Hello, I &apos m Mohd Musaiyab
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Full Stack Developer | Passionate about creating innovative,
                scalable web applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I &apos m excited to apply for a position at{" "}
                <span className="font-semibold">Zootools</span>. With my
                experience in building dynamic platforms like{" "}
                <Link
                  href="gossipyfy.vercel.app"
                  target="_blank"
                  className="font-semibold"
                >
                  Gossipyfy
                </Link>{" "}
                and
                <Link
                  href={"https://github.com/canteen-Connect"}
                  target="_blank"
                  className="font-semibold"
                >
                  {" "}
                  Canteen Connect
                </Link>{" "}
                I aim to bring value to your team by delivering robust and
                impactful solutions tailored to user needs.
              </p>
              <div className="space-x-4 mt-6">
                <a
                  href="mailto:musaiyab2003@gmail.com"
                  className="bg-gradient-to-r from-[#6A11CB] to-[#2575FC] text-white px-6 py-2 rounded-full hover:opacity-90 transition flex items-center"
                >
                  <Send className="mr-2" /> Contact Me
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 mt-6 md:mt-0">
              {/* About Me Section */}
              <section className="relative mb-6">
                <Link
                  href="https://www.notion.so/About-Me-769116254f004e60b25e9867cf093986"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-2xl font-bold text-[#2575FC] mb-4">
                    About Me
                  </h2>
                  <p className="text-gray-300 mb-4">
                    I &apos m Mohd Musaiyab, a full-stack developer passionate about
                    building efficient and scalable web applications. I love
                    collaborating on challenging problems and leveraging modern
                    web technologies to create impactful solutions.
                  </p>
                </Link>

                {/* Floating Message */}
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-sm px-3 py-1 rounded-lg shadow-lg">
                  Notion Docs
                </div>
              </section>

              {/* Portfolio Section */}
              <section>
                <Link
                  href="https://mohd-musaiyab.onrender.com/"
                  target="_blank"
                >
                  <h2 className="text-2xl font-bold text-[#2575FC] mb-4">
                    My Portfolio
                  </h2>
                  <div className="flex justify-center">
                    <img
                      src="./image.png"
                      alt="Portfolio Preview"
                      className="rounded-lg shadow-2xl w-full max-w-sm border-4 border-[#2575FC]/30"
                    />
                  </div>
                </Link>
              </section>
            </div>
          </div>
        </header>

        <div className="bg-gradient-to-br from-[#1F1F1F] to-[#2C2C2C] rounded-2xl shadow-2xl p-8 mb-12 border border-gray-800">
          <h2 className="text-3xl font-bold text-[#2575FC] mb-6">
            Application Message
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Dear Zootools Team,
            <br />
            <br />I am excited to express my interest in the Software
            Engineer/Intern position at Zootools. With a strong foundation in
            technologies such as{" "}
            <span className="font-semibold text-[#2575FC]">
              Next.js, Node.js, Prisma, and WebSockets
            </span>
            , coupled with experience in developing innovative platforms like{" "}
            <Link
              href="https://gossipyfy.vercel.app/"
              target="_blank"
              className="font-semibold text-[#2575FC]"
            >
              Gossipyfy
            </Link>
            and{"  "}
            <Link
              href="https://github.com/canteen-Connect"
              target="_blank"
              className="font-semibold text-[#2575FC]"
            >
              Canteen Connect
            </Link>
            , I am eager to contribute to Zootools &apos mission of delivering
            impactful solutions.
            <br />
            <br />
            My ability to craft scalable and user-focused applications, as well
            as my collaborative nature, positions me well to thrive in your
            dynamic environment. I would welcome the opportunity to discuss how
            my skills align with your goals.
            <br />
            <br />
            Thank you for considering my application. I look forward to the
            possibility of contributing to your team.
            <br />
            <br />
            Best regards,
            <br />
            <span className="font-semibold text-[#2575FC]">Mohd Musaiyab</span>
          </p>
        </div>

        {/* Highlighted Projects */}
        <section className="bg-gradient-to-r from-[#6A11CB] via-[#2575FC] to-[#1E1E1E] rounded-2xl shadow-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6">Highlighted Projects</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#121212] text-gray-100 p-6 rounded-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-[#2575FC] mb-3">
                Gossipyfy
              </h3>
              <p className="text-gray-300 mb-4">
                A platform to monetise your gossips and daily conversations.
              </p>
              <a
                href="https://gossipyfy.vercel.app"
                target="_blank"
                className="flex items-center text-[#2575FC] hover:underline"
              >
                View Project <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-[#121212] text-gray-100 p-6 rounded-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-[#2575FC] mb-3">
                Canteen Connect
              </h3>
              <p className="text-gray-300 mb-4">
                Real-time cafeteria management system for over 5000+ users.
              </p>
              <a
                href="https://github.com/Canteen-Connect"
                target="_blank"
                className="flex items-center text-[#2575FC] hover:underline"
              >
                View Project <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </section>
        {/* What I Bring to the Team */}
        <section className="bg-gradient-to-br from-[#1F1F1F] to-[#2C2C2C] rounded-2xl shadow-2xl p-8 mb-12 border border-gray-800">
          <h2 className="text-3xl font-bold text-[#2575FC] mb-6">
            What I Bring to Zootools
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#121212] p-6 rounded-lg hover:shadow-2xl transition">
              <h3 className="font-semibold text-[#2575FC] mb-2">
                Proven Track Record
              </h3>
              <p className="text-gray-300">
                Successfully built platforms like{" "}
                <Link
                  href="https://gossipyfy.vercel.app/"
                  target="_blank"
                  className="font-semibold text-[#2575FC]"
                >
                  Gossipyfy
                </Link>{" "}
                and{" "}
                <Link
                  href="https://github.com/canteen-Connect"
                  target="_blank"
                  className="font-semibold text-[#2575FC]"
                >
                  Canteen Connect
                </Link>
                , showcasing my ability to deliver scalable, user-focused
                solutions.
              </p>
            </div>
            <div className="bg-[#121212] p-6 rounded-lg hover:shadow-2xl transition">
              <h3 className="font-semibold text-[#2575FC] mb-2">
                Adaptability
              </h3>
              <p className="text-gray-300">
                Comfortable working across different technologies and quickly
                learning new tools to align with team goals and project needs.
              </p>
            </div>
            <div className="bg-[#121212] p-6 rounded-lg hover:shadow-2xl transition">
              <h3 className="font-semibold text-[#2575FC] mb-2">
                User-Centric Design
              </h3>
              <p className="text-gray-300">
                Expertise in creating solutions that prioritize seamless user
                experiences and accessibility.
              </p>
            </div>
            <div className="bg-[#121212] p-6 rounded-lg hover:shadow-2xl transition">
              <h3 className="font-semibold text-[#2575FC] mb-2">
                Collaborative Spirit
              </h3>
              <p className="text-gray-300">
                A proactive team player who values open communication and
                collaboration to achieve shared goals.
              </p>
            </div>
          </div>
        </section>

        {/* Why Hire Me Section */}
        <section className="bg-gradient-to-br from-[#1F1F1F] to-[#2C2C2C] rounded-2xl shadow-2xl p-8 mb-12 border border-gray-800">
          <h2 className="text-3xl font-bold text-[#2575FC] mb-6">
            Why You Should Hire Me
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#121212] p-6 rounded-lg hover:shadow-2xl transition">
              <h3 className="font-semibold text-[#2575FC] mb-2">
                Technical Expertise
              </h3>
              <p className="text-gray-300">
                Mastery in modern web technologies like React, Next.js, and
                Node.js.
              </p>
            </div>
            <div className="bg-[#121212] p-6 rounded-lg hover:shadow-2xl transition">
              <h3 className="font-semibold text-[#2575FC] mb-2">
                Innovative Thinker
              </h3>
              <p className="text-gray-300">
                Proven ability to deliver creative solutions to challenging
                problems.
              </p>
            </div>
            <div className="bg-[#121212] p-6 rounded-lg hover:shadow-2xl transition">
              <h3 className="font-semibold text-[#2575FC] mb-2">Team Player</h3>
              <p className="text-gray-300">
                Collaborates effectively within cross-functional teams to drive
                success.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="bg-gradient-to-br from-[#1F1F1F] to-[#2C2C2C] rounded-2xl shadow-2xl p-8 mb-12 border border-gray-800">
          <h2 className="text-3xl font-bold text-[#2575FC] mb-6">
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-300">
                <Code className="mr-2 text-[#2575FC]" /> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "C++", "Python"].map((lang) => (
                  <span
                    key={lang}
                    className="bg-[#121212] text-[#2575FC] px-3 py-1 rounded-full text-sm border border-[#2575FC]/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-300">
                <Server className="mr-2 text-[#2575FC]" /> Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "Express"].map((frame) => (
                  <span
                    key={frame}
                    className="bg-[#121212] text-[#2575FC] px-3 py-1 rounded-full text-sm border border-[#2575FC]/30"
                  >
                    {frame}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-300">
                <Database className="mr-2 text-[#2575FC]" /> Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "MySQL"].map((db) => (
                  <span
                    key={db}
                    className="bg-[#121212] text-[#2575FC] px-3 py-1 rounded-full text-sm border border-[#2575FC]/30"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-300">
                <Wrench className="mr-2 text-[#2575FC]" /> Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Postman", "GitHub", "Prisma ORM"].map((tool) => (
                  <span
                    key={tool}
                    className="bg-[#121212] text-[#2575FC] px-3 py-1 rounded-full text-sm border border-[#2575FC]/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects Section */}
        <section className="bg-gradient-to-br from-[#1F1F1F] to-[#2C2C2C] rounded-2xl shadow-2xl p-8 border border-gray-800">
          <h2 className="text-3xl font-bold text-[#2575FC] mb-6">
            Other Projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-estate",
                description:
                  "A real-estate listing application built using MERN ,Tailwind and Redux",
                website: "https://e-estate.onrender.com/",
                repo: "https://github.com/MohdMusaiyab/real-estate",
              },
              {
                title: "E-Commerce Site",
                description:
                  "An overview of Project Two, detailing its purpose and key highlights.",
                website: "https://mandmecommerce.onrender.com/",
                repo: "https://github.com/MohdMusaiyab/e-commerce-frontend",
              },
              {
                title: "Mess Match",
                description:
                  "A platform Connecting Colleges and Corporates with Mess Vendors and Contractors",
                website: "https://github.com/MohdMusaiyab/MessMatch",
                repo: "https://github.com/MohdMusaiyab/MessMatch",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-[#121212] p-6 rounded-lg shadow-md hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold text-[#2575FC] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="space-x-4">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2575FC] hover:underline"
                  >
                    Visit Website
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:underline"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
