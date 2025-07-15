import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Clothing Box",
    description: "ระบบขายเสื้อผ้าออนไลน์ รองรับการสั่งซื้อและจัดการหลังบ้าน",
    tech: ["Next.js", "shadcn/ui", "Tailwind", "Prisma", "MySQL"],
    url: "https://clothingbox.coopmsds.com",
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
    url: "https://line.coopmsds.com/",
  },
  {
    title: "ระบบเลือกตั้งกรรมการสหกรณ์ฯ",
    description: "ระบบสำหรับการเลือกตั้งกรรมการสหกรณ์ฯ ผ่านเว็บ",
    tech: ["PHP", "JQuery", "MySQL"],
    url: "https://election.coopmsds.com/",
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
  "REST APIs",
  "LINE API",
  "OpenAI API",
];

export default function Home() {
  return (
    <div className="min-h-screen w-full text-gray-800">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Hi, I'm a Developer</h1>
          <p className="text-lg mb-6">
            I build full-stack web applications using modern frameworks like
            Next.js, Tailwind, and Prisma.
          </p>
          <a href="#projects">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 transition">
              View My Work
            </Button>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="text-base px-4 py-2 bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-md hover:shadow-lg transition"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          ตัวอย่าง Projects
        </h2>
        <div className="grid gap-6">
          {projects.map((proj, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition border border-gray-200"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <Badge
                      key={i}
                      className="text-sm px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md hover:shadow-lg transition"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <Link href={proj.url} target="_blank">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 transition">
                    Visit Project
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gradient-to-r from-gray-100 to-gray-300 py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Contact Me
          </h2>
          <p className="text-gray-600 mb-6">
            สนใจร่วมงานหรือจ้างพัฒนาเว็บ ติดต่อผมได้ทางอีเมลหรือ jobsdb
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:notcis07@gmail.com">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition">
                Email
              </Button>
            </a>
            <a
              href="https://th.jobsdb.com/th/profile/watcharit-meesonk-pFwcTY9C1j"
              target="_blank"
            >
              <Button className="bg-gray-600 text-white hover:bg-gray-700 transition">
                jobsdb
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
