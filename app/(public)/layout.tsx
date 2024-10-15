import { PropsWithChildren } from "react";

import { PublicLayoutHeader } from "./components/layout/header";
import { PublicLayoutFooter } from "./components/layout/footer";

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <PublicLayoutHeader />

      <main>{children}</main>

      <PublicLayoutFooter />
    </div>
  );
}
