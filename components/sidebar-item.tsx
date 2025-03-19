"use client"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props={
  label:string;
  iconSrc:string;
  href:string;
};

export const SidebarItem = ({
  label,
  iconSrc,
  href,
}: Props) => {
  const pathname = usePathname();
  const active = pathname ===href;
  return(
    <Button variant = {active? "sidebaroutline" : "sidebar"}
    className="justify-start h-[60px]
    asChild
    " >
      <Link href={href}>
      <Image
      src={iconSrc}
      alt={label}
      className="mr-10"
      height={32}
      width={32} 
      />
      {label}
      </Link>

    </Button>
  );
};
