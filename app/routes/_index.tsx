import type { V2_MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Hero />
    </main>
  );
}
