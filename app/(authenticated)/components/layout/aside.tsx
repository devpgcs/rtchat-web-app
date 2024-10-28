import Link, { LinkProps } from "next/link";
import { MessengerLayoutProps } from "./interfaces/messenger-layout-props.interface";

export function MessengerLayoutAside({ pathname }: MessengerLayoutProps) {
  const noChatsFound = "No chats found";
  const noContactsFound = "No contacts found";

  const notFoundRender: Record<MessengerLayoutProps["pathname"], string> = {
    "/messenger": noChatsFound,
    "/messenger/contacts": noContactsFound,
  };

  return (
    <aside className="bg-slate-100 min-w-80 max-md:hidden">
      <div className="flex bg-slate-200 text-slate-700">
        <MessengerLayoutAsideNavLink href="/messenger" pathname={pathname}>
          Chats
        </MessengerLayoutAsideNavLink>

        <MessengerLayoutAsideNavLink href="/messenger/contacts" pathname={pathname}>
          Contacts
        </MessengerLayoutAsideNavLink>
      </div>

      <div className="p-4">
        <p className="text-center">{notFoundRender[pathname]}</p>
      </div>
    </aside>
  );
}

function MessengerLayoutAsideNavLink({ href, pathname, children }: MessengerLayoutProps & Pick<LinkProps, "href">) {
  const activeNavClasses = "bg-slate-800 text-lime-400 font-medium";

  return (
    <Link role="button" href={href} className={`block flex-1 p-3 ${pathname === href && activeNavClasses}`}>
      {children}
    </Link>
  );
}
