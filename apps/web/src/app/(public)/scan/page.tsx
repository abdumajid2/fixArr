"use client";
import { useEffect, useRef, useState } from "react";
const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
export default function ScanPage() {
  const videoRef = useRef<HTMLVideoElement|null>(null);
  const [error, setError] = useState<string|null>(null);
  const [issue, setIssue] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          // @ts-ignore
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (e:any) { setError(e?.message || "Не удалось открыть камеру"); }
    })();
  }, []);
  const captureAndClassify = async () => {
    if (!videoRef.current) return;
    setLoading(true);
    const canvas = document.createElement("canvas");
    const v = videoRef.current;
    canvas.width = v.videoWidth || 640;
    canvas.height = v.videoHeight || 360;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
    try {
      const res = await fetch(`${API}/vision/classify`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: dataUrl })
      });
      const json = await res.json();
      setIssue(json);
    } catch (e:any) { setError(e?.message || "Ошибка классификации"); }
    finally { setLoading(false); }
  };
  const openGuide = async () => {
    if (!issue?.issue) return;
    const res = await fetch(`${API}/guide/generate`, {
      method: "POST", headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ issue: issue.issue })
    });
    const data = await res.json();
    sessionStorage.setItem("fixar_last_guide", JSON.stringify({ issue: issue.issue, ...data }));
    window.location.href = "/guide/session-demo";
  };
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white shadow p-4">
        <h2 className="text-lg font-semibold">Сканирование</h2>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <video ref={videoRef} className="w-full rounded-lg mt-3 bg-black" />
        <div className="mt-4 flex gap-3">
          <button onClick={captureAndClassify} disabled={loading}
            className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50">
            {loading ? "Анализ..." : "Анализировать"}
          </button>
          <button onClick={openGuide} disabled={!issue}
            className="px-4 py-2 rounded bg-emerald-600 text-white disabled:opacity-50">
            Показать шаги
          </button>
        </div>
        {issue && (
          <div className="mt-4 p-3 rounded border">
            <div className="font-medium">Версия (mock): {issue.issue?.title}</div>
            <div className="text-sm text-slate-600">Уверенность: {(issue.confidence*100).toFixed(0)}%</div>
          </div>
        )}
      </div>
    </div>
  );
}
