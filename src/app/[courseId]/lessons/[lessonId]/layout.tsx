import { CourseHeader } from "@/components/course-header";
import { LessonSidenav } from "@/components/lesson-sidenav";

async function getCourse(courseId: string) {
    const res = await fetch(`https://www.lecturekit.io/api/v1/courses/${courseId}`, {
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
            <div className="flex gap-5 h-full">
                <LessonSidenav course={course} />
                <main className="w-full">
                    {children}
                </main>
            </div>
        </>
    );
}