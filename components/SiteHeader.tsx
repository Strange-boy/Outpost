import Link from "next/link";
import { Box, CircleHelp, LayoutDashboard, Sparkles, Tag } from "lucide-react";
import { usePathname } from "next/navigation";
import { Show, SignInButton, UserButton, useAuth } from "@clerk/nextjs";

const navLinks = [
    { href: "#product", label: "Product", icon: Box },
    { href: "#how-it-works", label: "How it works", icon: CircleHelp },
    { href: "#pricing", label: "Pricing", icon: Tag },
];

const SiteHeader = () => {
    const pathName = usePathname();

    const {isSignedIn} = useAuth();
    const isLandingPage = pathName === '/';

    return (
        <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border border-white/5 bg-[#12151c]/90 px-5 backdrop-blur">
                <Link
                    href={isSignedIn && !isLandingPage ? "/dashboard" : "/"}
                    className="flex items-center gap-2 text-lg font-medium tracking-tight text-white"
                >
                    <Sparkles className="size-5 text-blue-500" />
                    <span>
                        Out<span className="text-blue-500">post</span>
                    </span>
                </Link>

                {isLandingPage && (
                    <nav className="hidden items-center gap-10 md:flex">
                        {navLinks.map(({ href, label, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className="flex items-center gap-1.5 text-sm text-neutral-200 transition-colors hover:text-white"
                            >
                                <Icon className="size-4" />
                                {label}
                            </Link>
                        ))}
                    </nav>
                )}

                <Show
                    when="signed-in"
                    fallback={
                        <SignInButton mode="modal">
                            <button
                                type="button"
                                className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-neutral-200 transition-colors hover:bg-white/15"
                            >
                                Sign in
                            </button>
                        </SignInButton>
                    }
                >
                    <div className="flex items-center gap-3">
                        <Link
                            href="/dashboard"
                            aria-label="Dashboard"
                            className="flex size-8 items-center justify-center rounded-full bg-white/10 text-neutral-200 transition-colors hover:bg-white/15 hover:text-white"
                        >
                            <LayoutDashboard className="size-4" />
                        </Link>
                        <UserButton />
                    </div>
                </Show>
            </div>
        </header>
    )
}

export default SiteHeader;
