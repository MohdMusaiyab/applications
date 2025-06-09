"use client";
import React from "react";
import {
  Send,
  Code,
  Wrench,
  Layer,
  Database,
  Server,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Application Header */}
        <header className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl p-8 mb-12 border border-orange-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Column */}
            <div className="flex-1 md:mr-6">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 mb-4">
                Hello! I&apos;m Mohd <span>Musaiyab</span>
              </h1>

              <p className="text-lg text-gray-700 mb-6">
                Full Stack Developer | Passionate about creating innovative,
                scalable web applications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dear CEO,
                <br />
                <br />
                I&apos;m reaching out to express my strong interest in
                contributing to your organization&apos;s success. With
                experience building dynamic platforms like{" "}
                <Link
                  href="https://gossipyfy.vercel.app"
                  target="_blank"
                  className="font-semibold text-orange-600"
                >
                  Gossipyfy
                </Link>
                ,{" "}
                <Link
                  href="https://mess-bazaar.vercel.app/"
                  target="_blank"
                  className="font-semibold text-orange-600"
                >
                  Mess-Bazaar
                </Link>
                , and{" "}
                <Link
                  href="https://github.com/canteen-Connect"
                  target="_blank"
                  className="font-semibold text-orange-600"
                >
                  Canteen Connect
                </Link>
                , I bring both technical expertise and business-aligned thinking
                that can drive meaningful impact.
                <br />
                <br />
                Additionally, I have submitted a separate application through
                your website team channel for your consideration. You can view
                it{" "}
                <Link
                  href="https://application-smashsend.vercel.app/"
                  target="_blank"
                  className="underline font-semibold text-orange-600"
                  rel="noopener noreferrer"
                >
                  here
                </Link>
                .
              </p>

              <div className="space-x-4 mt-6">
                <a
                  href="mailto:musaiyab2003@gmail.com"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition flex items-center"
                >
                  <Send className="mr-2" /> Contact Me
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 mt-6 md:mt-0">
              {/* Executive Summary Section */}
              <section className="relative mb-6">
                <Link
                  href="https://nosy-shear-a9c.notion.site/About-Me-769116254f004e60b25e9867cf093986"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-2xl font-bold text-orange-600 mb-4">
                    Executive Summary
                  </h2>
                  <p className="text-gray-700 mb-4">
                    I&apos;m a solutions-driven developer who bridges technical
                    execution with business objectives. My approach combines
                    technical rigor with strategic thinking to deliver products
                    that create real value.
                  </p>
                  <div className="absolute top-0 right-0 bg-orange-600 text-white text-sm px-3 py-1 rounded-lg shadow-lg">
                    Notion Docs
                  </div>
                </Link>
              </section>

              {/* Portfolio Section */}
              <section className="mb-6">
                <Link
                  href="https://mohd-musaiyab.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-2xl font-bold text-orange-600 mb-4">
                    Portfolio Preview
                  </h2>
                  <div className="flex justify-center">
                    <img
                      src="./image.png"
                      alt="Portfolio"
                      className="rounded-lg shadow-xl w-full max-w-sm border-4 border-orange-200"
                    />
                  </div>
                </Link>
              </section>

              {/* Projects Section */}
              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  Selected Projects
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <Link
                      href="https://gossipyfy.vercel.app"
                      target="_blank"
                      className="underline font-semibold text-orange-600"
                      rel="noopener noreferrer"
                    >
                      Gossipyfy
                    </Link>{" "}
                    – A voice-based social platform focused on authentic user
                    interaction.
                  </li>
                  <li>
                    <Link
                      href="https://mess-bazaar.vercel.app/"
                      target="_blank"
                      className="underline font-semibold text-orange-600"
                      rel="noopener noreferrer"
                    >
                      Mess-Bazaar
                    </Link>{" "}
                    – A marketplace connecting mess contractors with
                    institutions featuring real-time bidding and chat.
                  </li>
                  <li>
                    <Link
                      href="https://github.com/canteen-Connect"
                      target="_blank"
                      className="underline font-semibold text-orange-600"
                      rel="noopener noreferrer"
                    >
                      Canteen Connect
                    </Link>{" "}
                    – A comprehensive canteen management system with order
                    tracking and payment integration.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </header>

        {/* Value Proposition Section */}
        <section className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl p-8 mb-12 border border-orange-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            How I Can Contribute to Your Organization
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-orange-600 mb-2">
                Technical Leadership
              </h3>
              <p className="text-gray-700">
                Proven ability to architect and deliver complex systems that
                scale with your business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-orange-600 mb-2">
                Business-Technology Alignment
              </h3>
              <p className="text-gray-700">
                Focus on solutions that directly support revenue growth and
                operational efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-orange-600 mb-2">
                Innovation Execution
              </h3>
              <p className="text-gray-700">
                Track record of transforming ideas into market-ready products
                quickly and effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-orange-600 mb-2">
                Team Scaling
              </h3>
              <p className="text-gray-700">
                Experience building systems that enable engineering teams to
                scale their productivity.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Expertise Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-orange-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center">
            <Code className="mr-3" /> Technical Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "CI/CD", "Microservices"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Leadership
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Technical Roadmaps",
                  "Mentoring",
                  "Agile Leadership",
                  "Hiring",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Let&apos;s Build Something Remarkable
          </h2>
          <p className="text-gray-700 mb-6">
            I&apos;d welcome the opportunity to discuss how I can contribute to
            your organization&apos;s success.
          </p>
          <a
            href="mailto:musaiyab2003@gmail.com"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition"
          >
            Schedule a Conversation
          </a>
          <p className="text-gray-500 text-sm mt-6">
            Crafted with strategic intent by Mohd Musaiyab
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
