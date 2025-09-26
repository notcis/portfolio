import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "สร้าง Blog ด้วย AI",
    description: "สร้างบทความ Blog ด้วย AI ง่ายๆ ในไม่กี่นาที",
    tech: [
      "Next.js",
      "Langchain",
      "Gemini",
      "shadcn/ui",
      "Tailwind",
      "Prisma",
      "MySQL",
    ],
    url: "https://blog.coopmsds.com",
  },

  {
    title: "AI Resume Builder",
    description: "สร้างเรซูเม่ด้วย AI ง่ายๆ ในไม่กี่นาที",
    tech: ["Next.js", "Gemini", "shadcn/ui", "Tailwind", "Prisma", "MySQL"],
    url: "https://resume.coopmsds.com",
  },
  {
    title: "LuckyLife",
    description: "เช็กดวง ดูสีมงคล เลขนำโชค ด้วย AI",
    tech: ["Next.js", "OpenAI API", "shadcn/ui", "Tailwind", "Prisma", "MySQL"],
    url: "https://horo.coopmsds.com",
  },
  {
    title: "Interview Assistant",
    description: "ระบบจำลองการสัมภาษณ์งานด้วย AI",
    tech: ["Next.js", "OpenAI API", "Hero UI", "Tailwind", "Prisma", "MySQL"],
    url: "https://interview.coopmsds.com",
  },
  {
    title: "Clothing Box",
    description: "ระบบขายเสื้อผ้าออนไลน์ รองรับการสั่งซื้อและจัดการหลังบ้าน",
    tech: ["Next.js", "shadcn/ui", "Tailwind", "Prisma", "MySQL"],
    url: "https://clothingbox.coopmsds.com",
  },
  {
    title: "Booking System",
    description: "ระบบจองคิวออนไลน์ รองรับการจองและจัดการหลังบ้าน",
    tech: ["Next.js", "shadcn/ui", "Tailwind", "Prisma", "MySQL"],
    url: "https://booking.coopmsds.com",
  },

  {
    title: "Chat Admin",
    description: "ระบบแชทเรียลไทม์แยกข้อความจาก LINE OA สำหรับแอดมิน",
    tech: ["Next.js", "Prisma", "MySQL", "shadcn/ui", "Tailwind"],
    url: "https://chat.coopmsds.com",
  },
  {
    title: "สหกรณ์ LINE Connect",
    description: "ระบบ LINE Login , Messaging API และใช้ AI เชื่อมโยงกับสมาชิก",
    tech: ["Node.js", "LINE API", "OpenAI API", "MySQL"],
    url: "https://lin.ee/Gbv2lml",
  },
  {
    title: "เวปไซต์สหกรณ์",
    description: "เว็บไซต์หลักของสหกรณ์ที่แสดงข้อมูลและข่าวสาร",
    tech: ["Next.js", "shadcn/ui", "Tailwind", "React Query", "MySQL"],
    url: "https://line.coopmsds.com",
  },
  {
    title: "ระบบเลือกตั้งกรรมการสหกรณ์ฯ",
    description: "ระบบสำหรับการเลือกตั้งกรรมการสหกรณ์ฯ ผ่านเว็บ",
    tech: ["PHP", "JQuery", "MySQL"],
    url: "https://election.coopmsds.com",
  },
];

const skills = [
  "Next.js",
  "React",
  "JQuery",
  "Node.js",
  "PHP",
  "python",
  "Prisma",
  "MySQL",
  "Tailwind CSS",
  "shadcn/ui",
  "bootstrap",
  "TypeScript",
  "LINE API",
  "OpenAI API",
  "Langchain",
  "RAG",
];

export default function Home() {
  return (
    <div className="min-h-screen w-full text-slate-900 bg-white">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-white via-slate-50 to-white text-slate-900">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-3">
              Hi, I'm a Developer
            </h1>
            <p className="max-w-2xl mx-auto md:mx-0 text-lg text-slate-600 mb-6">
              Building clean, responsive full-stack web applications using
              Next.js, Tailwind, and Prisma. I focus on performance,
              accessibility and simple UX.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <a href="#projects" aria-label="View projects">
                <Button className="inline-flex items-center gap-2 bg-sky-600 text-white hover:bg-sky-700 transition px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2">
                  View My Work
                </Button>
              </a>
              <a href="#skills" aria-label="View skills">
                <Button className="inline-flex items-center gap-2 border border-slate-200 bg-white text-sky-600 hover:bg-slate-50 transition px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-100 focus-visible:ring-offset-1">
                  Skills
                </Button>
              </a>
            </div>
          </div>

          <div className="flex-1 max-w-xs md:max-w-sm mx-auto">
            {/* simple clean avatar / illustration block */}
            <div className="w-full h-56 md:h-64 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-slate-100 shadow-sm flex items-center justify-center">
              <span className="text-sm text-slate-500">
                <Image
                  src="avatar.svg"
                  alt="watcharit developer avatar"
                  className="w-full h-full object-cover rounded-2xl"
                  width={256}
                  height={256}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-slate-900">
          Skills
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-8">
          Technologies and tools I use to build modern, maintainable
          applications.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-800 shadow-sm"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <Card
              key={index}
              className="h-full rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-slate-900">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((t, i) => (
                      <Badge
                        key={i}
                        className="text-xs md:text-sm px-2 py-1 rounded-full bg-slate-100 text-slate-800 shadow-sm"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={proj.url}
                    target="_blank"
                    aria-label={`Visit ${proj.title}`}
                  >
                    <Button className="bg-sky-600 text-white hover:bg-sky-700 transition px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2">
                      Visit Site
                    </Button>
                  </Link>
                  <span className="text-xs text-slate-500">Live demo</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-slate-900">
            Contact Me
          </h2>
          <p className="text-slate-600 mb-6">
            Open to freelance opportunities and collaborations. Reach out and
            lets build something clean and useful.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/notcis"
              aria-label="Visit GitHub profile"
            >
              <Button className="bg-sky-600 text-white hover:bg-sky-700 transition px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2">
                Github
              </Button>
            </a>
            <a
              href="https://fastwork.co/user/notcis07"
              target="_blank"
              aria-label="Fastwork profile"
            >
              <Button className="bg-slate-800 text-white hover:bg-slate-900 transition px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2">
                Fastwork
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
