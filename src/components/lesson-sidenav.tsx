'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface ILessonSidenavProps {
    course: any;
}

export const LessonSidenav = ({ course }: ILessonSidenavProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { courseId, lessonId } = useParams();

    return (
        <>
            <Button
                variant={'outline'}
                className={
                    cn("fixed z-10 p-3 left-[10px] bottom-[10px] lg:hidden w-10 h-10 shadow-xl",
                        menuOpen ? 'left-[300px]' : 'left-[10px]'
                    )}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ?
                    <X size={20} className="min-w-[20px]" />
                    :
                    <Menu size={20} className="min-w-[20px]" />
                }
            </Button>
            <aside className={
                cn("fixed bottom-0 lg:sticky lg:h-[calc(100vh_-_64px)] z-20 bg-background  overflow-hidden top-[64px] border-r min-w-[290px] max-w-[290px] grid grid-rows-[auto_1fr] transition-all",
                    menuOpen ? `translate-x-[0] lg:sticky` : `translate-x-[-100%] lg:translate-x-[0]`
                )}
            >
                <p className='font-semibold border-b mx-5 py-3 bg-white'>Course content</p>
                <div className="flex h-full flex-col overflow-auto pt-3">
                    {course.chapters.map((chapter: any, idx: number) => (
                        <div className=' text-gray-800 px-5' key={chapter.id}>
                            <p className='font-semibold mb-1'>Chapter {idx + 1}: {chapter.name}</p>
                            <div className='pb-5 flex flex-col gap-[2px]'>
                                {chapter.lessons.map((lesson: any, lessonIdx: number) => (
                                    <Link href={`/${courseId}/lessons/${lesson.id}`} className={cn('text-sm cursor-pointer font-light text-gray-500 hover:bg-blue-50 p-2 rounded-sm', lesson.id === lessonId ? 'bg-blue-50' : '')} key={lesson.id}>
                                        {lessonIdx + 1}: {lesson.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};
