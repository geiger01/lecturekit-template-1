import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Link from "next/link";

async function getCourses() {
  const res = await fetch(`https://lecturekit-new-git-dev-geiger01.vercel.app/api/v1/courses`, {
    cache: 'no-store',
    headers: {
      'x-api-key': process.env.LECTUREKIT_API_KEY || ''
    }
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data.data.results;
}

export default async function Home() {
  const courses = await getCourses();

  return (
    <>
      <Header />
      <div className="flex gap-5 min-h-screen">
        {courses.map((c) => (
          <Link className="border" key={c._id} href={`/${c._id}`} >{c.name}</Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
