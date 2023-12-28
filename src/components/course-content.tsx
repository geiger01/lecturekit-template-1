import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Dot } from 'lucide-react';

interface ICourseContentProps {
    course: any;
}

export const CourseContent = ({ course }: ICourseContentProps) => {
    const totalChapters = course.chapters.length;
    const totalLessons = course.chapters.reduce((acc: number, i: any) => {
        return acc += i.lessons.length;
    }, 0);

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8">
            <h2 className='text-2xl text-gray-800 font-bold'>Course Content</h2>
            <div className='flex text-gray-500 items-center mt-2'>
                <p>{totalChapters} Chapters</p>
                <Dot />
                <p>{totalLessons} Lessons</p>
            </div>
            <Accordion className='mt-5 border [&>*:last-child]:border-none rounded-[15px]' type="single" defaultValue='item-1'>
                {course.chapters.map((chapter: any, idx: number) => (
                    <AccordionItem className='border-b text-gray-800 px-5' key={chapter.id} value={`item-${idx + 1}`}>
                        <AccordionTrigger className='text-lg font-medium text-left py-5'>{chapter.name}</AccordionTrigger>
                        <AccordionContent className='flex flex-col gap-[10px] pb-5'>
                            {chapter.lessons.map((lesson: any) => (
                                <p className='text-base' key={lesson.id}>
                                    {lesson.name}
                                </p>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
