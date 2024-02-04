import { CoursesHero } from "@/components/courses-hero";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

async function getCourses() {
  const res = await fetch(`https://www.lecturekit.io/api/v1/courses`, {
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
      <CoursesHero courses={courses} />
      <Footer />
    </>
  );
}
