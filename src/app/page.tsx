"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Globe,
  PlayCircle,
  Terminal,
  Cpu,
  LayoutTemplate,
  Database,
} from "lucide-react";

const ChatInner = dynamic(() => import("@/components/n8n/chat"), {
  ssr: false,
});

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 space-y-24">
        {/* --- Hero Section & About --- */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
              Watcharit Meesonk
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium tracking-tight">
              Software Developer <span className="mx-2 text-zinc-300">|</span>{" "}
              AI Developer
            </p>
          </div>

          <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">
            นักพัฒนาซอฟต์แวร์ผู้เชี่ยวชาญด้านการสร้างระบบ Automation Workflows
            และการประยุกต์ใช้ AI ในภาคธุรกิจ มีประสบการณ์ในการสร้าง AI Agents
            แบบ RAG และการเชื่อมต่อระบบผ่าน LINE API
            เพื่อเพิ่มประสิทธิภาพการทำงานแบบอัตโนมัติ
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <ContactLink
              href="https://portfolio-woad-chi-25.vercel.app"
              icon={<Globe size={20} />}
              text="Website & AI Chatbot"
            />
            <ContactLink
              href="https://github.com/notcis"
              icon={<Github size={20} />}
              text="GitHub"
            />
            <ContactLink
              href="https://www.linkedin.com/in/watcharit-meesonk-22905b37a"
              icon={<Linkedin size={20} />}
              text="LinkedIn"
            />
          </div>
        </section>

        {/* --- Technical Skills --- */}
        <section className="space-y-8">
          <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillGroup
              icon={<Cpu className="text-zinc-400" />}
              title="AI & Deep Learning"
              skills="PyTorch (Neural Networks, Transfer Learning), Computer Vision, LLM & RAG"
            />
            <SkillGroup
              icon={<Terminal className="text-zinc-400" />}
              title="Automation & DevOps"
              skills="n8n, Workflow Orchestration, Docker, DigitalOcean, GitHub, AWS"
            />
            <SkillGroup
              icon={<LayoutTemplate className="text-zinc-400" />}
              title="Development"
              skills="Next.js, React, Node.js, PHP, Prisma, MySql, PostgreSQL"
            />
            <SkillGroup
              icon={<Database className="text-zinc-400" />}
              title="Cloud & Platforms"
              skills="Supabase, Vercel, Hugging Face, LINE Messaging API"
            />
          </div>
        </section>

        {/* --- Featured Projects --- */}
        <section className="space-y-8">
          <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
            Featured Projects
          </h2>

          <div className="space-y-16">
            {/* Project Category 1 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold tracking-tight">
                1. AI Automation & Workflows (n8n)
              </h3>
              <p className="text-zinc-500">
                สร้างระบบจัดการงานอัตโนมัติที่ช่วยลดขั้นตอนการทำงานและเพิ่มความแม่นยำด้วย
                AI
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ProjectCard
                  title="AI พนักงานร้านอาหาร (RAG System)"
                  desc="ระบบตอบคำถามและจองโต๊ะอัตโนมัติโดยใช้ n8n & Supabase"
                  linkText="ดูวิดีโอสอน"
                  href="https://youtu.be/ifc73eAZQII"
                />
                <ProjectCard
                  title="AI ตรวจสอบสลิปโอนเงิน"
                  desc="ระบบตรวจสอบสลิปและสรุปยอดเข้าบัญชีอัตโนมัติผ่าน LINE OA ช่วยลดงานแอดมิน 100%"
                  linkText="ดูวิดีโอสอน"
                  href="https://youtu.be/6DtQJdFbQnM"
                />
                <ProjectCard
                  title="AI Marketing Tools"
                  desc="ระบบเปลี่ยนรูปสินค้าเป็นภาพโฆษณาไวรัล และการใช้ AI สร้างนางแบบ/นายแบบเสมือนจริง"
                  linkText="ดูวิดีโอสอน"
                  href="https://youtu.be/gBl8XF5OVLM"
                />
                <ProjectCard
                  title="AI Stock Analysis"
                  desc="ระบบวิเคราะห์หุ้นสหรัฐฯ พร้อมส่งสัญญาณการลงทุนเข้า LINE OA"
                  linkText="ดูวิดีโอสอน"
                  href="https://youtu.be/wgRB1HlkCgg"
                />
              </div>
            </div>

            {/* Project Category 2 */}
            <div className="space-y-6 border-t border-zinc-200 pt-10">
              <h3 className="text-2xl font-semibold tracking-tight">
                2. AI Model Deployment & Content Creation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ProjectCard
                  title="AI Model Deployment on Hugging Face"
                  desc="การนำโมเดล Deep Learning ขึ้นระบบ Cloud เพื่อใช้งานจริง"
                  linkText="huggingface.co/NotCis07/spaces"
                  href="https://huggingface.co/NotCis07/spaces"
                />
                <ProjectCard
                  title="The Automator X"
                  desc="ช่องข่าวสารที่ดำเนินการด้วย AI Automation Workflows 100% บน Facebook, TikTok และ YouTube"
                  linkText="Facebook"
                  href="https://www.facebook.com/TheAutomatorX"
                />
              </div>
            </div>

            {/* Project Category 3 & 4 */}
            <div className="space-y-6 border-t border-zinc-200 pt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    3. Systems Integration
                  </h3>
                  <ProjectCard
                    title="Line OA Connect"
                    desc="ตัวอย่างการเชื่อมต่อระบบผ่าน Line Message API และ Line Login"
                    linkText="ทดลองใช้งาน"
                    href="https://lin.ee/OO4HZ4A"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    4. Knowledge Sharing
                  </h3>
                  <ProjectCard
                    title="YouTube Creator"
                    desc="สอนการติดตั้งระบบโครงสร้างพื้นฐาน เช่น การติดตั้ง n8n V2 บน DigitalOcean ด้วย Docker เพื่อใช้งานแบบไม่จำกัด"
                    linkText="ดูวิดีโอสอน"
                    href="https://youtu.be/FJXmTasen4A"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="pt-12 pb-6 flex justify-between items-center border-t border-zinc-200 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Watcharit Meesonk.</p>
          <p>Built with Next.js</p>
        </footer>
      </div>
      <ChatInner />
    </main>
  );
}

/* --- Components (ช่วยให้โค้ดสะอาดตาและคุม Theme ได้ง่าย) --- */

function ContactLink({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors"
    >
      {icon}
      <span className="font-medium text-sm">{text}</span>
    </Link>
  );
}

function SkillGroup({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string;
}) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl hover:bg-zinc-100 transition-colors">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-zinc-900 mb-1">{title}</h4>
        <p className="text-sm text-zinc-600 leading-relaxed">{skills}</p>
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  linkText,
  href,
}: {
  title: string;
  desc: string;
  linkText?: string;
  href?: string;
}) {
  return (
    <div className="group flex flex-col justify-between p-6 bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md hover:border-zinc-200 transition-all duration-300">
      <div className="space-y-3">
        <h4 className="font-semibold text-zinc-900 text-lg leading-snug group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
      </div>
      {linkText && href && (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors"
        >
          <PlayCircle size={16} />
          {linkText}
        </Link>
      )}
    </div>
  );
}
