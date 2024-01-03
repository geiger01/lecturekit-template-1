import Link from 'next/link';
import React from 'react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ICourse } from '@/types';

interface ICoursesHeroProps {
    courses: Partial<ICourse>[];
}

export const CoursesHero = ({ courses }: ICoursesHeroProps) => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 py-20 md:px-8 text-gray-600">
                <div className="text-center w-full">
                    <h1 className="text-4xl text-gray-800 font-extrabold md:text-5xl mb-3">
                        LectureKit Starter Template
                    </h1>
                    <p className="text-lg">
                        Explore the Blueprint for Your Custom Course Platform
                    </p>
                </div>
                <div className='max-w-screen-xl px-4 py-20 md:px-8 flex gap-8 items-stretch justify-center mx-auto flex-wrap'>
                    {courses.map((course) => (
                        <Link className='flex-[300px] max-w-[400px]' href={`/${course._id}`} key={course._id}>
                            <Card >
                                <img className='rounded-t-lg w-full h-[200px] object-cover ' src={course.thumbnail} alt={course.name} />
                                <CardHeader>
                                    <CardTitle>{course.name}</CardTitle>
                                    <CardDescription className='line-clamp-4'>{course.description}</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button variant={'outline'} className='w-full'>Get Started</Button>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
