
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

    return (
        <div className="flex min-h-screen" >
            {/* <CourseSidenav user={JSON.parse(JSON.stringify(user))} /> */}
            sidenave
            <div className="flex flex-col flex-1">
                {/* <CourseHeader /> */}
                header
                <main className="flex w-full flex-1 flex-col">
                    {children}
                </main>
            </div>
        </div >
    );
}