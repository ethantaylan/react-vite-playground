import { PropsWithChildren } from "react";
import { Header } from "./header/header";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-screen flex flex-col items-center p-24">
      <Header />
      {children}
    </div>
  );
}
