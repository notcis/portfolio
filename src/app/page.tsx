"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Globe,
  Play,
  ExternalLink,
  Bot,
  Presentation,
} from "lucide-react";

const ChatInner = dynamic(() => import("@/components/n8n/chat"), {
  ssr: false,
});

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32 space-y-24">
        {/* Header & About Section */}
        <section className="space-y-8 fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Watcharit Meesonk
            </h1>
            <p className="text-xl text-zinc-500 font-medium">
              Software Developer & Systems Analyst
            </p>
          </div>

          <p className="text-zinc-600 leading-relaxed text-lg max-w-2xl">
            มีความมุ่งมั่นในการสร้างสรรค์ซอฟต์แวร์ที่ใช้งานได้จริง
            (Utility-First) โดยเฉพาะการนำ AI
            มาเปลี่ยนวิธีการทำงานแบบเดิมให้เป็นระบบอัตโนมัติ
            ปัจจุบันกำลังศึกษาต่อยอดด้าน Deep Learning ด้วย PyTorch
            เพื่อนำมาประยุกต์ใช้กับโปรเจกต์ที่ซับซ้อนยิ่งขึ้น
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <ContactLink
              href="https://portfolio-woad-chi-25.vercel.app"
              icon={<Globe />}
              text="Website & AI Chatbot"
            />
            <ContactLink
              href="https://github.com/notcis"
              icon={<Github />}
              text="GitHub"
            />
            <ContactLink
              href="https://www.linkedin.com/in/watcharit-meesonk-22905b37a"
              icon={<Linkedin />}
              text="LinkedIn"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-zinc-800">
            <SkillCategory
              title="Frontend/Backend"
              skills="Next.js, React, Prisma, PyTorch for Deep Learning"
            />
            <SkillCategory
              title="Infrastructure"
              skills="Docker, DigitalOcean, AWS, Ubuntu"
            />
            <SkillCategory title="Automation" skills="n8n, GitHub" />
            <SkillCategory
              title="Database/BaaS"
              skills="Supabase, Vercel, Pinecone, MySQL, PostgreSQL"
            />
            <SkillCategory
              title="AI & Integration"
              skills="RAG (Retrieval-Augmented Generation), Line Messaging API, Line Login, Better Auth, Hugging Face, LangChain, OpenAI API, Google Gemini API, Claude API"
            />
          </div>
        </section>

        {/* AI Automation & Workflows */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            AI Automation & Workflows
          </h2>
          <div className="grid gap-10 sm:grid-cols-2">
            <ProjectItem
              title="ระบบพนักงานร้านอาหาร AI"
              desc="ใช้เทคโนโลยี RAG ร่วมกับ n8n และ Supabase ตอบคำถาม จองโต๊ะ ส่งอีเมลอัตโนมัติ"
              href="https://youtu.be/ifc73eAZQII"
              icon={<Bot size={20} />}
            />
            <ProjectItem
              title="ระบบตรวจสอบสลิปอัตโนมัติ"
              desc="AI ตรวจสอบการโอนเงินและสรุปยอดเข้าบัญชีผ่าน LINE OA ลดงานแอดมิน 100%"
              href="https://youtu.be/6DtQJdFbQnM"
              icon={<Bot size={20} />}
            />
            <ProjectItem
              title="AI Marketing: สร้างภาพโฆษณาไวรัล"
              desc="เปลี่ยนรูปสินค้าให้เป็นภาพโฆษณาภายใน 20 วินาที ผ่าน LINE OA"
              href="https://youtu.be/gBl8XF5OVLM"
              icon={<Presentation size={20} />}
            />
            <ProjectItem
              title="AI Stock Analysis"
              desc="ระบบวิเคราะห์หุ้นสหรัฐฯ พร้อมส่งสัญญาณการลงทุนผ่าน LINE OA"
              href="https://youtu.be/wgRB1HlkCgg"
              icon={<Bot size={20} />}
            />
          </div>
        </section>

        {/* LINE API & Deployment */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Integration & Deployment
          </h2>
          <div className="flex flex-col gap-8">
            <ListItem
              title="Line OA Connect"
              desc="ระบบเชื่อมต่อ Line Message API และ Line Login"
              href="https://lin.ee/OO4HZ4A"
            />
            <ListItem
              title="Hugging Face Spaces"
              desc="การปรับใช้ AI Model บน Cloud Platform"
              href="https://huggingface.co/NotCis07/spaces"
            />
            <ListItem
              title="The Automator X"
              desc="ช่องข่าว AI Automation (Facebook, TikTok, YouTube)"
              href="https://www.facebook.com/TheAutomatorX"
            />
          </div>
        </section>

        {/* YouTube Tutorials */}
        <section className="space-y-8">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
            Knowledge Sharing
          </h2>
          <div className="space-y-6">
            <TutorialLink
              title="สอนติดตั้ง n8n V2 บน DigitalOcean (Docker) – ใช้งาน Workflow ไม่จำกัด!"
              href="https://youtu.be/FJXmTasen4A"
            />
            <TutorialLink
              title="ไม่ต้องจ้างนายแบบ! AI สร้างรูปสินค้าเสื้อผ้า พร้อมนายแบบ/นางแบบให้เอง"
              href="https://youtu.be/qN-I2KtkP6I"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-6 text-zinc-400 text-sm flex justify-between">
          <p>© {new Date().getFullYear()} Watcharit Meesonk.</p>
          <p>Built with Next.js & n8n Spirit.</p>
        </footer>
      </div>
      <ChatInner />
    </main>
  );
}

/* --- Components สำหรับ UI แบบ Border-less --- */

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
      rel="noreferrer"
      className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors"
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span className="font-medium text-sm">{text}</span>
    </Link>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string }) {
  return (
    <div className="flex flex-col mb-4 min-w-[200px]">
      <span className="text-zinc-500 text-sm mb-1">{title}</span>
      <span className="font-medium">{skills}</span>
    </div>
  );
}

function ProjectItem({
  title,
  desc,
  href,
  icon,
}: {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col gap-3 p-4 -m-4 hover:bg-zinc-50 rounded-2xl transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-zinc-100 rounded-lg text-zinc-600 group-hover:bg-zinc-200 transition-colors">
          {icon}
        </div>
        <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
          {title}
          <ExternalLink
            size={14}
            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zinc-400"
          />
        </h3>
      </div>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </Link>
  );
}

function ListItem({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
    >
      <h3 className="font-semibold text-zinc-900 min-w-[200px] flex items-center gap-2 group-hover:text-blue-600 transition-colors">
        {title}
        <ExternalLink
          size={14}
          className="text-zinc-300 group-hover:text-blue-600 transition-colors"
        />
      </h3>
      <p className="text-zinc-500 text-sm">{desc}</p>
    </Link>
  );
}

function TutorialLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-start gap-4 p-4 -m-4 hover:bg-zinc-50 rounded-2xl transition-colors"
    >
      <div className="mt-1 text-red-500 opacity-80 group-hover:opacity-100 transition-opacity">
        <Play size={20} fill="currentColor" />
      </div>
      <h3 className="font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors leading-relaxed">
        {title}
      </h3>
    </Link>
  );
}
