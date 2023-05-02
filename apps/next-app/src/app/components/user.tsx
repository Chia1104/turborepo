"use client";

import { Avatar, AvatarImage, AvatarFallback } from "ui";
import { useSession } from "next-auth/react";
import Button from "ui/server/button";
import { useRouter } from "next/navigation";

const User = () => {
  const { data, status } = useSession();
  const router = useRouter();
  return (
    <div className="flex items-center">
      {status === "authenticated" ? (
        <Avatar>
          <AvatarImage
            src={data?.user?.image ?? ""}
            alt={data?.user?.name ?? "avatar"}
          />
          <AvatarFallback>{data?.user?.name}</AvatarFallback>
        </Avatar>
      ) : (
        <Button onClick={() => router.push("/login")}>Login</Button>
      )}
    </div>
  );
};

export default User;
