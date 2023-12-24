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

export default async function CoursePage({ params }: { params: { courseId: string; }; }) {
    const course = await getCourse(params.courseId);
    return <div>Course Page: {course.name}</div>;
}