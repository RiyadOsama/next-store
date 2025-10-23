"use client";

import SignInWithGithub from "@/components/atoms/SignInWithGithub";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SignOutWithGithub from "../atoms/SignOutWithGithub";

function GithubProfileClientSide() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="card shadow-sm border-0">
        <div className="card-body text-center p-4">
          <p className="mb-0">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="card shadow-sm border-0">
        <div className="card-body text-center p-4">
          <SignInWithGithub />
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body text-center">
        <Image
          src={session.user?.image ?? "/default-avatar.png"}
          width={200}
          height={200}
          alt={`${session.user?.name}'s profile picture`}
          className="rounded-circle mb-3"
        />
        <h3 className="card-title h5 mb-2">{session.user?.name}</h3>
        <p className="text-muted mb-4">{session.user?.email}</p>
        <SignOutWithGithub />
      </div>
    </div>
  );
}

export default GithubProfileClientSide;
