async function getLessons(courseId: string, lessonId: string) {
    const res = await fetch(`https://lecturekit-new-git-dev-geiger01.vercel.app/api/v1/courses/${courseId}/lessons/${lessonId}`, {
        cache: 'no-store',
        headers: {
            'x-api-key': process.env.LECTUREKIT_API_KEY || ''
        }
    });

    const data = await res.json();

    if (!data.success) {
        throw new Error(data.message);
    }

    return data.data;
}

export default async function LessonPage({ params }: { params: { courseId: string; lessonId: string; }; }) {
    const lesson = await getLessons(params.courseId, params.lessonId);
    return (
        <>
            Lesson Page: {lesson.name}
        </>
    );
}