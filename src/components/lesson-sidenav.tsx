'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface ILessonSidenavProps {
    course: any;
}

export const LessonSidenav = ({ course }: ILessonSidenavProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
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
                cn("fixed bottom-0 lg:sticky lg:h-[calc(100vh_-_64px)] z-20 bg-background  overflow-hidden top-[64px] border-r min-w-[290px] max-w-[290px] grid grid-cols-[1fr] grid-rows-[1fr] md:grid-rows-[1fr_auto] transition-all",
                    menuOpen ? `translate-x-[0] lg:sticky` : `translate-x-[-100%] lg:translate-x-[0]`
                )}
            >
                <div className="flex h-full flex-col items-center gap-2 overflow-auto p-2 md:p-3">

                </div>
                <div className="hidden md:block mx-auto my-3 w-full px-5">

                </div>
            </aside>
        </>
    );
};
