"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Linkedin,
  PlayCircle,
  Bot,
  Cloud,
  Network,
  User,
} from "lucide-react";
import Link from "next/link";
import { createChat } from "@n8n/chat";
import { useEffect } from "react";

export default function PortfolioPage() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://n8n.vanilasky.com/webhook/5f900f5f-6b4a-4033-afcc-e7c6912ba18c/chat",
      initialMessages: [
        "สวัสดี! 👋",
        "ฉันชื่อ แตงกวา เป็นผู้ช่วยตอบคำถามของ Watcharit",
      ],
      i18n: {
        en: {
          title: "สวัสดี! 👋",
          subtitle: "AI Chatbot. ตอบคำถาม 24/7.",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your question..",
          closeButtonTooltip: "",
        },
      },
    });
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-200 dark:selection:bg-blue-900">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <Badge
          variant="secondary"
          className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30"
        >
          AI & Automation Developer
        </Badge>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          Watcharit Meesonk
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
          นำเสนอผลงานและประสบการณ์ด้านการพัฒนาปัญญาประดิษฐ์ (AI), Deep Learning,
          การเชื่อมต่อระบบ (API Integration) และระบบอัตโนมัติ (Automation)
        </p>
        <div className="flex gap-4">
          <Button asChild className="rounded-full px-8">
            <Link href="#contact">ติดต่อฉัน</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link href="#projects">ดูผลงาน</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-24" id="projects">
        {/* Section 1: AI Chatbot & API Integration */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold">AI Chatbot & API Integration</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="ระบบ AI ตรวจสอบสลิปโอนเงินผ่าน LINE OA"
              description="พัฒนาโซลูชันตรวจสอบสลิปธนาคารอัตโนมัติผ่าน LINE Messaging API เพื่อความรวดเร็วและแม่นยำในการทำธุรกรรม"
              linkText="ชมวิดีโอสาธิต"
              linkHref="https://youtu.be/6DtQJdFbQnM?si=6Rim05qD-_OVpXkE"
              tags={["LINE API", "LLM"]}
            />
            <ProjectCard
              title="ระบบ AI ตอบคำถามและจองโต๊ะ (RAG System)"
              description="ออกแบบระบบสนทนาอัจฉริยะที่เชื่อมต่อกับฐานข้อมูลเฉพาะ (Retrieval-Augmented Generation) เพื่อให้ AI ตอบคำถามและดำเนินการจองได้ในตัวเดียว"
              linkText="ชมวิดีโอสาธิต"
              linkHref="https://youtu.be/ifc73eAZQII?si=sLqe_fB-boqels7D"
              tags={["RAG", "LLM", "Chatbot"]}
            />
            <ProjectCard
              title="AI วิเคราะห์หุ้นและส่งสัญญาณเข้า LINE OA"
              description="สร้างระบบวิเคราะห์ทิศทางตลาดและส่งสัญญาณการลงทุนให้นักลงทุนแบบ Real-time"
              linkText="ชมวิดีโอสาธิต"
              linkHref="https://youtu.be/wgRB1HlkCgg?si=Z7TEnRSdaXk1bR7h"
              tags={["Data Analysis", "Real-time API", "LINE API"]}
            />
            <ProjectCard
              title="Image Generation & Transformation"
              description="พัฒนาระบบใช้ AI เปลี่ยนรูปภาพสินค้าทั่วไปให้เป็นภาพโฆษณาระดับมืออาชีพ ผ่าน LINE OA"
              linkText="ชมวิดีโอสาธิต"
              linkHref="https://youtu.be/gBl8XF5OVLM?si=_s3TciF7NSIv8scX"
              tags={["Generative AI", "Image Processing", "LINE API"]}
            />
          </div>
        </section>

        {/* Section 2: AI Model Development & Deployment */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
              <Cloud className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold">
              AI Model Development & Deployment
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <ProjectCard
              title="AI Model Deployment with Hugging Face"
              description="นำโมเดล Deep Learning ขึ้นระบบ Cloud เพื่อให้ใช้งานได้จริงในรูปแบบ Web Application"
              linkText="ลิงก์ตัวอย่างผลงาน: Hugging Face Spaces"
              linkHref="https://huggingface.co/NotCis07/spaces"
              tags={[
                "Deep Learning",
                "PyTorch",
                "Hugging Face",
                "Cloud Deployment",
              ]}
              icon={<ExternalLink className="w-4 h-4 mr-2" />}
            />
          </div>
        </section>

        {/* Section 3: Automation & Infrastructure */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
              <Network className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold">Automation & Infrastructure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="AI Automation Workflows with n8n"
              description="ออกแบบการทำงานอัตโนมัติ (Workflow Orchestration) สำหรับการสร้างและจัดการเนื้อหาข่าวสารบนโซเชียลมีเดียแบบครบวงจร"
              linkText="Facebook & TikTok: The Automator X"
              linkHref="https://www.facebook.com/TheAutomatorX"
              tags={["n8n", "Workflow Automation", "Social Media API"]}
              icon={<ExternalLink className="w-4 h-4 mr-2" />}
            />
            <ProjectCard
              title="Line Connect Solution"
              description="ตัวอย่างการเชื่อมต่อระบบบริการต่างๆ ผ่านแพลตฟอร์ม LINE เพื่อความสะดวกของผู้ใช้งาน"
              linkText="ลิงก์ตัวอย่าง: Line Connect Demo"
              linkHref="https://lin.ee/OO4HZ4A"
              tags={["LINE Messaging API", "System Integration"]}
              icon={<ExternalLink className="w-4 h-4 mr-2" />}
            />
          </div>
        </section>
      </main>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-slate-900 text-white py-16 mt-24">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6">
            <User className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold mb-8">Profile & Contact</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="rounded-xl w-full sm:w-auto"
            >
              <Link href="https://github.com/notcis" target="_blank">
                <Github className="w-5 h-5 mr-2" />
                GitHub (notcis)
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="rounded-xl w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link
                href="https://www.linkedin.com/in/watcharit-meesonk-22905b37a"
                target="_blank"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Watcharit Meesonk. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Reusable Project Card Component
function ProjectCard({
  title,
  description,
  linkText,
  linkHref,
  tags,
  icon,
}: any) {
  return (
    <Card className="group flex flex-col h-full hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, index: number) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-start text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
        >
          <Link href={linkHref}>
            {icon ? icon : <PlayCircle className="w-4 h-4 mr-2" />}
            {linkText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
