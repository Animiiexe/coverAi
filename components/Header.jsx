import Link from "next/link";
import { getUserFromCookies } from "@/lib/getUser";
import { logout } from "@/actions/userController";
import { Sparkles } from "lucide-react";

export default async function Header() {
  const user = await getUserFromCookies();

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 group active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 bg-[#BA3CFF] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-[#BA3CFF]/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-[#BA3CFF] text-transparent bg-clip-text hover:bg-gradient-to-l transition-all duration-500">
              CoverAI
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-3 sm:space-x-4">
            {user ? (
              <>
                <Link
                  href="/create"
                  className="px-5 py-2 rounded-lg font-medium text-white bg-[#BA3CFF] hover:bg-[#A82EF7] transition-colors shadow-md hover:shadow-[#BA3CFF]/40"
                >
                  Create
                </Link>
                <form action={logout}>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Sign Out
                  </button>
                </form>
              </>
            ) : (
              <Link
                href="/login"
                className="px-5 py-2 rounded-lg font-medium text-white bg-[#BA3CFF] hover:bg-[#A82EF7] transition-colors shadow-md hover:shadow-[#BA3CFF]/40"
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}