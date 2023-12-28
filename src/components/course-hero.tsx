
import dayjs from 'dayjs';
import { BadgeCheck, CalendarCheck, Clapperboard } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ICourseHeroProps {
    course: any;
}

export const CourseHero = ({ course }: ICourseHeroProps) => {
    const totalLessons = course.chapters.reduce((acc: number, i: any) => {
        return acc += i.lessons.length;
    }, 0);

    const features = [
        {
            name: "Trusted",
            icon: <BadgeCheck size={18} />
        },
        {
            name: `Over ${totalLessons}+ lessons`,
            icon: <Clapperboard size={18} />
        },
        {
            name: `Last updated: ${dayjs(course.updatedAt).format('MMM D, YYYY')}`,
            icon: <CalendarCheck size={18} />
        }
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8 xl:flex">
            <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
                <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
                    {
                        features.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-x-2 text-gray-500 text-sm">
                                {item.icon}
                                {item.name}
                            </div>
                        ))
                    }
                </div>
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                    {course.name}
                </h1>
                <p className="max-w-xl mx-auto xl:mx-0">
                    {course.description}
                </p>
                <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
                    <Link href="/" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                        Browse courses
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link href={`/${course._id}/lessons`} className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex">
                        Get started
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
                <img src={course.thumbnail} className="rounded-lg w-full object-cover object-top max-h-[320px]" alt={course.name} />
            </div>
        </div>
    );
};
