async function getCourse() {
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

  return data.data.results[0];
}

export default async function Home() {
  const data = await getCourse();
  
  return (
    <>Course Name: {data.name}</>
  );
}
