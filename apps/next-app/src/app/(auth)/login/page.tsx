"use client";

import { signIn } from "next-auth/react";
import Button from "ui/button";

const LoginPage = () => {
  return (
    <article className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-light/80 flex min-h-[200px] flex-col justify-center gap-5 rounded-lg p-5 text-start shadow-2xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to Next.js!
        </h1>
        <Button
          color="secondary"
          className="min-h-[3rem] w-full"
          onClick={() =>
            signIn("google", {
              redirect: true,
              callbackUrl: "/",
            })
          }>
          <span>Sign in with Google</span>
        </Button>
      </div>
    </article>
  );
};

export default LoginPage;
