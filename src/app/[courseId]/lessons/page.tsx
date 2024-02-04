import { redirect } from 'next/navigation';

async function getFirstLesson(courseId: string) {
    const res = await fetch(`https://www.lecturekit.io/api/v1/courses/${courseId}/lessons`, {
        cache: 'no-store',
        headers: {
            'x-api-key': process.env.LECTUREKIT_API_KEY || ''
        }
    });

    const data = await res.json();

    if (!data.success) {
        throw new Error(data.message);
    }

    return data.data?.results?.[0];
}

export default async function LessonsPage({ params }: { params: { courseId: string; lessonId: string; }; }) {
    const lesson = await getFirstLesson(params.courseId);
    if (!lesson) {
        redirect(`/${params.courseId}`);
    }
    redirect(`/${params.courseId}/lessons/${lesson.id}`);
}