import { Button } from "@/components/ui/button";
import { 
  ClerkLoaded, 
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
 } from "@clerk/nextjs";
import{Loader } from "lucide-react";
import Image from "next/image";
export const Header = () => {
  return(
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.png" height={100} width={100} alt="logo"/>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
</ClerkLoading>
<ClerkLoaded>
<SignedIn>

  <UserButton
    afterSignOutUrl="/"/> 
  </SignedIn>
  <SignedOut>
    <SignInButton 
    mode="modal"
    afterSignInUrl="/learn"
    afterSignUpUrl="/learn"
    >
      <Button size="lg" variant="ghost">
        Login

      </Button>

    </SignInButton>
  </SignedOut>

</ClerkLoaded>

        </div>            
    </header>

  );
};