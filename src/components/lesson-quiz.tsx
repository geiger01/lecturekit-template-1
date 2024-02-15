'use client';

import { ILesson } from '@/types';
import React from 'react';

interface ILessonVideoProps {
    lesson: ILesson;
}

export const LessonQuiz = ({ lesson }: ILessonVideoProps) => {
    if (!lesson.quizHtml) {
        return <></>;
    }

    return (
        <div
            className="w-full border rounded-lg mt-8 p-5"
            dangerouslySetInnerHTML={{ __html: lesson.quizHtml }}
        />
    );
};
