import { Skeleton } from "@/components/ui/skeleton";

export default function LessonsLoading() {
    return (
        <>
            <div className="px-3 pb-5">
                <div className="max-w-screen-lg mx-auto mt-8">
                    <div className="flex item-center justify-between gap-5 flex-wrap">
                        <div className="flex flex-col gap-1">
                            <Skeleton className="h-4 w-[200px]" />
                            <Skeleton className="h-8 w-[330px]" />
                        </div>
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-12 w-12 " />
                            <Skeleton className="h-12 w-12" />
                        </div>
                    </div>
                    <Skeleton className="w-full border rounded-lg mt-8 aspect-video" />
                    <div
                        className="w-full mt-8 flex flex-col gap-3"
                    >
                        <Skeleton className="h-8 w-2/5 mb-4" />
                        <Skeleton className="h-4 w-3/5" />
                        <Skeleton className="h-4 w-2/5" />
                        <Skeleton className="h-4 w-2/5" />
                    </div>
                </div>
            </div>
        </>
    );
}
