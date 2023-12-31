'use client';

import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

interface ILessonActionsProps {
    lessons: { total: number, results: any[]; };
    currentLessonIdx: number;
}

export const LessonActions = ({ lessons, currentLessonIdx }: ILessonActionsProps) => {
    const router = useRouter();
    const { courseId } = useParams();

    const nextLesson = lessons.results[currentLessonIdx + 1];
    const prevLesson = lessons.results[currentLessonIdx - 1];

    return (
        <div className="flex items-center gap-3">
            <Button
                onClick={() => router.push(`/${courseId}/lessons/${prevLesson.id}`)}
                disabled={!prevLesson}
                variant={'outline'}
                className="p-3 text-gray-500 hover:text-gray-800"
            >
                <ArrowLeft size={20} />
            </Button>
            <Button
                onClick={() => router.push(`/${courseId}/lessons/${nextLesson.id}`)}
                disabled={!nextLesson}
                variant={'outline'}
                className="p-3 text-gray-500 hover:text-gray-800"
            >
                <ArrowRight size={20} />
            </Button>
        </div>
    );
};
