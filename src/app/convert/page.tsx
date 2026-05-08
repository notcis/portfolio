"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import { title } from "process";

// --- Logic การแปลงตัวเลขเป็นตัวหนังสือไทย ---
const THAI_DIGITS = [
  "ศูนย์",
  "หนึ่ง",
  "สอง",
  "สาม",
  "สี่",
  "ห้า",
  "หก",
  "เจ็ด",
  "แปด",
  "เก้า",
];
const THAI_POSITIONS = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน"];

function convertNumberToThaiText(numStr: string): string {
  // ลบลูกน้ำออกและลบช่องว่าง
  let cleanStr = numStr.replace(/,/g, "").trim();

  if (!cleanStr) return "";
  if (!/^-?\d+(\.\d+)?$/.test(cleanStr)) return "รูปแบบตัวเลขไม่ถูกต้อง";

  let isNegative = false;
  if (cleanStr.startsWith("-")) {
    isNegative = true;
    cleanStr = cleanStr.substring(1);
  }

  const parts = cleanStr.split(".");
  const intPart = parts[0];
  const decPart = parts[1];

  let result = "";

  // ฟังก์ชันแปลงเลขจำนวนเต็ม (รองรับหลักล้านขึ้นไป)
  const getIntegerText = (num: string) => {
    if (num === "0") return "ศูนย์";
    let text = "";
    const len = num.length;

    for (let i = 0; i < len; i++) {
      const digit = parseInt(num[i]);
      if (digit === 0) continue;

      const pos = len - i - 1;

      if (pos === 1 && digit === 1) {
        text += "สิบ";
      } else if (pos === 1 && digit === 2) {
        text += "ยี่สิบ";
      } else if (pos === 0 && digit === 1 && parseInt(num) > 10) {
        text += "เอ็ด";
      } else {
        text += THAI_DIGITS[digit] + THAI_POSITIONS[pos];
      }
    }
    return text;
  };

  // แบ่งเลขเป็นชุดละ 6 หลัก (จากหลังไปหน้า) เพื่อรองรับหลักล้าน, ล้านล้าน ฯลฯ
  if (intPart === "0") {
    result = "ศูนย์";
  } else {
    let chunks = [];
    let remaining = intPart;
    while (remaining.length > 0) {
      chunks.push(remaining.slice(-6));
      remaining = remaining.slice(0, -6);
    }

    for (let i = 0; i < chunks.length; i++) {
      if (parseInt(chunks[i]) !== 0) {
        const chunkText = getIntegerText(chunks[i]);
        const millionSuffix = i > 0 ? "ล้าน".repeat(i) : "";
        result = chunkText + millionSuffix + result;
      }
    }
  }

  // จัดการทศนิยม (อ่านเรียงตัว)
  if (decPart && decPart.length > 0) {
    result += "จุด";
    for (let i = 0; i < decPart.length; i++) {
      result += THAI_DIGITS[parseInt(decPart[i])];
    }
  }

  return (isNegative ? "ลบ" : "") + result;
}

export default function NumberToThaiWord() {
  const [numberInput, setNumberInput] = useState("");
  const [thaiTextOutput, setThaiTextOutput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNumberInput(val);
    if (val.trim() === "") {
      setThaiTextOutput("");
    } else {
      setThaiTextOutput(convertNumberToThaiText(val));
    }
  };

  const handleCopyText = async () => {
    if (!thaiTextOutput || thaiTextOutput === "รูปแบบตัวเลขไม่ถูกต้อง") return;

    try {
      await navigator.clipboard.writeText(thaiTextOutput);
      toast("คัดลอกสำเร็จ! ✅");
    } catch (err) {
      toast("เกิดข้อผิดพลาด");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-8 bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          แปลงตัวเลขอารบิก เป็นตัวหนังสือภาษาไทย
        </h1>
        <p className="text-blue-100 text-lg">
          Arabic Numeral to Thai Words Converter
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
        {/* Input Card */}
        <Card className="shadow-md border-blue-100">
          <CardHeader className="bg-blue-600 rounded-t-lg text-white pb-4">
            <CardTitle className="flex items-center gap-2">
              <span className="bg-blue-800 p-2 rounded-md text-sm">1</span>
              ตัวเลข (Number)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-slate-500 mb-2">
              กรอกตัวเลขที่ต้องการแปลง เช่น 55,555.555 หรือ 999999
            </p>
            <Textarea
              placeholder="ตัวอย่าง.. 5555.55"
              className="min-h-[150px] text-lg resize-none focus-visible:ring-blue-500"
              value={numberInput}
              onChange={handleInputChange}
            />
          </CardContent>
        </Card>

        {/* Desktop Arrow (Hidden on Mobile) */}
        {/* <div className="hidden md:flex items-center justify-center -mx-4 z-10">
          <div className="bg-white p-3 rounded-full shadow-md border border-slate-100 text-blue-600">
            <ArrowRightLeft size={24} />
          </div>
        </div> */}

        {/* Output Card */}
        <Card className="shadow-md border-teal-100">
          <CardHeader className="bg-teal-600 rounded-t-lg text-white pb-4">
            <CardTitle className="flex items-center gap-2">
              <span className="bg-teal-800 p-2 rounded-md text-sm">2</span>
              ตัวหนังสือ (Text)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-slate-500 mb-2">
              ผลลัพธ์ (คลิกที่กล่องข้อความเพื่อคัดลอกอัตโนมัติ)
            </p>
            <div
              onClick={handleCopyText}
              className={`relative cursor-pointer group`}
            >
              <Textarea
                readOnly
                placeholder="ผลลัพธ์จะแสดงที่นี่.."
                className="min-h-[150px] text-lg resize-none bg-slate-100 cursor-pointer focus-visible:ring-teal-500"
                value={thaiTextOutput}
              />
              {/* Copy Hint Overlay */}
              {thaiTextOutput &&
                thaiTextOutput !== "รูปแบบตัวเลขไม่ถูกต้อง" && (
                  <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md border-2 border-teal-500 pointer-events-none">
                    <span className="bg-teal-600 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 shadow-sm">
                      <Copy size={16} /> คลิกเพื่อคัดลอก
                    </span>
                  </div>
                )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
