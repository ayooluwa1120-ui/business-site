import type { Route } from "./+types/home";
import  BusinessPage  from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AYOOLUWA" },
    { name: "description", content: "Welcome to my business website!" },
  ];
}

export default function Home() {
  return <BusinessPage />;
}
