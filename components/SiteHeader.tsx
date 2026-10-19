import Link from "next/link";
import { Box, CircleHelp, Sparkles, Tag } from "lucide-react";

const navLinks = [
    { href: "#product", label: "Product", icon: Box },
    { href: "#how-it-works", label: "How it works", icon: CircleHelp },
    { href: "#pricing", label: "Pricing", icon: Tag },
];

const SiteHeader = () => {
    const isSignedIn = false;
    const isLandingPage = true;

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

                {isSignedIn ? (
                    <button
                        type="button"
                        className="flex size-8 items-center justify-center rounded-full bg-white/10 text-[11px] font-medium text-neutral-200 transition-colors hover:bg-white/15"
                    >
                        JJ
                    </button>
                ) : (
                    <Link
                        href="/sign-in"
                        className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-neutral-200 transition-colors hover:bg-white/15"
                    >
                        Sign in
                    </Link>
                )}
            </div>
        </header>
    )
}

export default SiteHeader;
