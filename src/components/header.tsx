"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 border-b bg-white">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex gap-6 md:gap-8">
                    <Link aria-label="LectureKit" href="/" className="items-center space-x-2 md:flex">
                        <Logo />
                    </Link>
                    <nav className="gap-8 flex">
                        <Link
                            href={'/'}
                            className={cn(
                                "flex relative items-center transition-colors hover:text-foreground/80 text-md",
                                pathname === '/'
                                    ? "text-foreground after:absolute after:w-full after:border-b-2 after:rounded-lg after:border-primary after:bottom-[-17px]"
                                    : "text-foreground/60",
                            )}
                        >
                            Courses
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-2">

                </div>
            </div>
        </header>

    );
};