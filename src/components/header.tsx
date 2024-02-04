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
            <div className="container px-2 flex h-16 items-center justify-between py-4">
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
                    <Link
                        href={`https://github.com/geiger01/lecturekit-template-1`}
                        target='_blank'
                        className="hover:opacity-80"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            role="img"
                            viewBox="0 0 16 16"
                            width="32"
                            height="32"
                            fill="#24292E"
                        >
                            <path
                                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                            </path>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>

    );
};