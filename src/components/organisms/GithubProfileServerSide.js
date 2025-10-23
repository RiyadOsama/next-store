import SignInWithGithub from "@/components/atoms/SignInWithGithub";
import { auth } from "@/lib/auth/NextAuth";
import Image from "next/image";
import SignOutWithGithub from "../atoms/SignOutWithGithub";

async function GithubProfileServerSide() {
  const session = await auth();

  return session ? (
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
  ) : (
    <div className="card shadow-sm border-0">
      <div className="card-body text-center p-4">
        <SignInWithGithub />
      </div>
    </div>
  );
}

export default GithubProfileServerSide;
