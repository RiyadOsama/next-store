"use client";

import { signOut } from "next-auth/react";
import { Github } from "lucide-react";

function SignOutWithGithub() {
  return (
    <form
      action={async () => {
        await signOut();
      }}
      className="d-flex justify-content-center"
    >
      <button
        type="submit"
        className="btn btn-dark d-flex align-items-center gap-2"
        aria-label="Sign in with GitHub"
      >
        <Github size={24} />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutWithGithub;
