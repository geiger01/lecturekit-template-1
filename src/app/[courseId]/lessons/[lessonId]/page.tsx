import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

async function getLessons(courseId: string, lessonId: string) {
    const res = await fetch(`https://lecturekit-new-git-dev-geiger01.vercel.app/api/v1/courses/${courseId}/lessons/${lessonId}`, {
        cache: 'no-store',
        headers: {
            'x-api-key': process.env.LECTUREKIT_API_KEY || ''
        }
    });

    const data = await res.json();

    const lessonsRes = await fetch(`https://lecturekit-new-git-dev-geiger01.vercel.app/api/v1/courses/${courseId}/lessons`, {
        cache: 'no-store',
        headers: {
            'x-api-key': process.env.LECTUREKIT_API_KEY || ''
        }
    });

    const lessonsData = await lessonsRes.json();

    if (!data.success) {
        throw new Error(data.message);
    }

    return { lesson: data.data, lessons: lessonsData.data || [] };
}

export default async function LessonPage({ params }: { params: { courseId: string; lessonId: string; }; }) {
    const { lesson, lessons } = await getLessons(params.courseId, params.lessonId);
    const currentLessonIdx = (lessons.results || []).findIndex((l: any) => l.id === lesson.id) || 0;

    return (
        <div className="px-3 pb-5">

            <div className="max-w-screen-lg mx-auto mt-8">
                <div className="flex item-center justify-between gap-5 flex-wrap">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-500">Lesson {currentLessonIdx + 1} of {lessons.total}</p>
                        <h2 className="text-2xl md:text-3xl font-bold">{lesson.name}</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant={'outline'} className="p-3 text-gray-500 hover:text-gray-800">
                            <ArrowLeft size={20} />
                        </Button>
                        <Button variant={'outline'} className="p-3 text-gray-500 hover:text-gray-800">
                            <ArrowRight size={20} />
                        </Button>
                    </div>
                </div>

                {/* Video */}
                <div className="w-full border rounded-lg mt-8 aspect-video"></div>
                {/* Lesson Additional Text */}
                <div
                    className="lesson-text mt-8"
                    dangerouslySetInnerHTML={{ __html: lesson.additionalText }} />
            </div>
        </div>
    );
}