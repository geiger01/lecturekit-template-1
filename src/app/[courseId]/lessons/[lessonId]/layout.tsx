import { CourseHeader } from "@/components/course-header";

async function getCourse(courseId: string) {
    const res = await fetch(`https://lecturekit-new-git-dev-geiger01.vercel.app/api/v1/courses/${courseId}`, {
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

export default async function LessonLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: {
        courseId: string;
        lessonId: string;
    };
}) {
    const course = await getCourse(params.courseId);

    return (
        <>
            <CourseHeader course={course} />
            <main className="flex w-full flex-1 flex-col">
                {children}
            </main>
        </>
    );
}