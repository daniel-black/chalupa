export default function JobPage({ params, searchParams }: {
  params: { jobId: string },
  searchParams?: { id: string },
}) {
  return (
    <div>
      <p>{params.jobId}</p>
    </div>
  );
}