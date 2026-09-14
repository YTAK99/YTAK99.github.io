import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "한영탁 | Han YoungTak — Full-stack Developer";
const description =
  "기획부터 프론트엔드, 백엔드, 배포까지 서비스의 전 과정을 연결하는 풀스택 개발자 한영탁의 포트폴리오입니다.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:5173";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title,
    description,
    authors: [{ name: "한영탁 | Han YoungTak" }],
    keywords: [
      "한영탁",
      "Han YoungTak",
      "풀스택 개발자",
      "Java",
      "Python",
      "Django",
      "Spring Boot",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ko_KR",
      images: [{ url: socialImage, width: 1794, height: 945, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
