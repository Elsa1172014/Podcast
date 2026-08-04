"use client";
import { useRouter } from "next/navigation";

export default function VoiceMessage() {
  const router = useRouter();
  return (
    <div style={{ maxWidth: 560, margin: "80px auto", padding: 24, textAlign: "center" }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>💬</div>
      <h1 style={{ fontSize: 20, marginBottom: 8 }}>إنشاء رسالة صوتية — قيد الإنشاء</h1>
      <p style={{ color: "#5B6F6C", lineHeight: 1.8, marginBottom: 20 }}>
        هذه الميزة (نص قصير + اختيار صوت من المكتبة + توليد وتحميل مباشر) قيد البناء كمرحلة منفصلة.
      </p>
      <button onClick={() => router.push("/dashboard")} style={{ padding: "10px 20px", borderRadius: 8, border: "none", background: "#14746F", color: "#fff", fontWeight: 600, cursor: "pointer" }}>
        العودة للوحة التحكم
      </button>
    </div>
  );
}
