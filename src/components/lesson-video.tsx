'use client';

import { ILesson } from '@/types';
import React from 'react';

interface ILessonVideoProps {
    lesson: ILesson;
}

export const LessonVideo = ({ lesson }: ILessonVideoProps) => {
    if (!lesson.url) {
        return <></>;
    }

    return (
        <video
            className="w-full border rounded-lg mt-8 aspect-video"
            controls
            src={lesson.url}
        >
        </video>
    );
};
