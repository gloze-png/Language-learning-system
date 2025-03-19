import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex bg-500 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <Image src="/logo.png" height={100} width={100} alt="logo" />
      </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem 
        label="Learn Now" 
        href="/learn"
        iconSrc="/learn.svg"/>

      </div>
    </div>
  );
};
