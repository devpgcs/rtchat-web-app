import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "@devpgcs/app/contexts/auth/auth-provider";
import { Button } from "@devpgcs/app/components/button";
import { CrudAction } from "@devpgcs/app/enums/crud-action.enum";
import { Dialog } from "@devpgcs/app/components/dialog";
import { DrawerNav } from "@devpgcs/app/components/drawer-nav";

import { ContactForm } from "../contact-form";

import { MessengerLayoutProps } from "./interfaces/messenger-layout-props.interface";

export function MessengerLayoutMain({ children, pathname }: MessengerLayoutProps) {
  const [canShowDrawerNav, setCanShowDrawerNav] = useState<boolean>(false);
  const [canShowContactForm, setCanShowContactForm] = useState<boolean>(false);

  const { logout } = useAuth();

  const openContactForm = () => {
    setCanShowDrawerNav(false);
    setCanShowContactForm(true);
  };

  const newContactButton = (className?: string) => (
    <Button className={className} onClick={openContactForm}>
      New Contact
    </Button>
  );

  const actions = (
    <div className="flex justify-end gap-2 max-md:flex-col max-md:flex-1 max-md:justify-between">
      <div className="flex gap-2 max-md:flex-col">
        {pathname === "/messenger/contacts" && (
          <>
            <Button onClick={() => {}}>Frienship requests</Button>
            {newContactButton()}
          </>
        )}
        {pathname === "/messenger" && (
          <>
            <Button>New Chat</Button>
            {newContactButton("hidden max-md:block")}
          </>
        )}
      </div>

      <Button onClick={logout}>Logout</Button>
    </div>
  );

  return (
    <main className="flex-1 h-screen flex flex-col">
      <div className="p-4 max-md:hidden">{actions}</div>

      <div className="p-4 items-center justify-between hidden max-md:flex">
        <h2 className="text-xl font-semibold">Real-time chat</h2>

        <div className="flex items-center gap-4">
          <div role="button" className="relative">
            <FontAwesomeIcon icon={faUserPlus} fontSize={20} />
            <div className="bg-red-500 text-slate-100 size-4 rounded-full text-[10px] flex items-center justify-center absolute -top-2 -left-2">
              10
            </div>
          </div>

          <div role="button" onClick={() => setCanShowDrawerNav(true)}>
            <FontAwesomeIcon icon={faBars} fontSize={24} className="text-slate-800" />
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">{children}</div>

      <DrawerNav isOpen={canShowDrawerNav} onClose={() => setCanShowDrawerNav(false)}>
        {actions}
      </DrawerNav>

      <Dialog isOpen={canShowContactForm} onClose={() => setCanShowContactForm(false)}>
        <ContactForm action={CrudAction.CREATE} />
      </Dialog>
    </main>
  );
}
