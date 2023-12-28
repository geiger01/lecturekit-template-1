import Link from "next/link";
import { Logo } from "./logo";

export const Footer = () => {
    return (
        <footer className="py-20">
            <div className="flex flex-col items-center max-w-[1200px] mx-auto px-4">
                <Link aria-label="LectureKit" href="/" className="items-center md:flex">
                    <Logo />
                </Link>
                <p className="mt-2 text-center text-muted-foreground">Craft stunning eLearning courses</p>
                <div className="border-b w-full my-5"></div>
                <p className="text-xs font-light text-muted-foreground">
                    &copy; {new Date().getFullYear()} LectureKit. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
