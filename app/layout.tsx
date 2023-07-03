import "./globals.css";
import { League_Spartan } from "next/font/google";
import stars from "@/assets/background-stars.svg";
import Image from "next/image";
import Header from "@/components/Header";

const spartan = League_Spartan({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-[#070724] h-full text-white overflow-x-hidden ${spartan.className}`}
      >
        <Header />
        <Image
          src={stars}
          alt="stars"
          className="absolute animate-pulse lg:animate-bounce-slow bg-contain scale-[2] z-[-50] md:scale-[1] overflow-x-hidden"
        />
        {children}
      </body>
    </html>
  );
}
