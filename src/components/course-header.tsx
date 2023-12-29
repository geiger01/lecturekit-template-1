import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { Logo } from "./logo";

interface ICourseHeaderProps {
    course: any;
}

export const CourseHeader = ({ course }: ICourseHeaderProps) => {
    return (
        <header className={"w-full z-40 bg-background"}>
            <div className="px-3 flex h-16 items-center justify-between py-4 border-b">
                <div className="flex max-w-full truncate">
                    <Link aria-label="LectureKit" href="/" className="items-center space-x-2 hidden sm:flex">
                        <Logo mini className="w-10 h-10" />
                    </Link>
                    <div className="flex items-center gap-2 sm:pl-2 sm:ml-3 sm:border-l">
                        <Link href={`/${course._id}`}>
                            <span
                                className={cn(
                                    "text-slate-400 gap-1 group flex items-center text-sm font-normal hover:text-accent-foreground",)}
                            >
                                <ChevronLeft size={16} />
                                Back
                            </span>
                        </Link>
                        <div className="text-sm text-slate-400">
                            /
                        </div>
                        <p title={course?.name} className="text-md font-semibold truncate max-w-[200px] sm:max-w-full">{course?.name || ''}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">

                </div>
            </div>
        </header>
    );
};