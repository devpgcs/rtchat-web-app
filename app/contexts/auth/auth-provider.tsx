"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from "react";

import getMe from "@devpgcs/app/api/actions/user/getMe";
import loginAction from "@devpgcs/app/api/actions/auth/login";
import logoutAction from "@devpgcs/app/api/actions/auth/logout";
import registerAction from "@devpgcs/app/api/actions/user/create";

import { getUser } from "@devpgcs/app/utils/user-utils";
import { useDelay } from "@devpgcs/app/hooks/use-delay";

import { ScreenLoading } from "@devpgcs/app/components/screen-loading";

import { AuthContextValue } from "./interfaces/auth-context-value.interface";

const AuthContext = createContext({} as AuthContextValue);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<AuthContextValue["user"]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();
  const pathname = usePathname();

  const delay = useDelay();

  const login: AuthContextValue["login"] = useCallback(
    async (username: string, password: string) => {
      const loginResponse = await loginAction({ username, password });

      const isLoginError = "errorMessage" in loginResponse;

      if (isLoginError) {
        alert(loginResponse.errorMessage);
      } else {
        const user = await getMe();

        const isUserError = "errorMessage" in user;

        if (isUserError) {
          alert(user.errorMessage);
        } else {
          setUser(user);
        }
      }
    },
    [setUser]
  );

  const logout: AuthContextValue["logout"] = useCallback(async () => {
    await logoutAction();
    setUser(null);

    router.replace("/auth/login");
  }, [setUser, router]);

  const register: AuthContextValue["register"] = useCallback(
    async (username: string, password: string, phoneNumber: string) => {
      const user = await registerAction({ username, password, phoneNumber });

      const isRegisterError = "errorMessage" in user;

      if (isRegisterError) {
        alert(user.errorMessage);
      } else {
        alert(`User ${user.username} has been created!`);
        router.push("/auth/login");
      }
    },
    [router]
  );

  useEffect(() => {
    if (!user) getUser().then(setUser);
  }, [user, setUser]);

  useEffect(() => {
    const isPublicPage = !pathname.startsWith("/messenger");

    if (user && isPublicPage) {
      router.replace("/messenger");
    }

    // By using this delay, the time of `250` will be reset every time the effect is called
    // so that, we can avoid showing the redirect navigation and just show the final page
    // after the app is fully loaded
    delay(() => {
      setIsLoading(false);
    }, 250);
  }, [user, pathname, router, delay, setIsLoading]);

  if (isLoading) {
    return <ScreenLoading />;
  }

  return <AuthContext.Provider value={{ user, login, logout, register }}>{children}</AuthContext.Provider>;
}
