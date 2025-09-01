import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center mx-auto container ">
      {/* <HeroPage /> */}
      <p>Landing Page</p>
      <Button>
        <Link href={"/dashboard"}>Dashboard</Link>
      </Button>
    </div>
  );
}
