"use client";

import { signIn } from "next-auth/react";
import { Github } from "lucide-react";

export default function SignInWithGithub() {
  return (
    <form
      action={async () => {
        await signIn("github");
      }}
      className="d-flex justify-content-center"
    >
      <button
        type="submit"
        className="btn btn-dark d-flex align-items-center gap-2"
        aria-label="Sign in with GitHub"
      >
        <Github size={24} />
        <span>Sign in</span>
      </button>
    </form>
  );
}
