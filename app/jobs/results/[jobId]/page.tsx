export default function JobPage({ params, searchParams }: {
  params: { jobId: string },
  searchParams?: { id: string },
}) {
  return (
    <div className="bg-purple-200">
      <p>{params.jobId}</p>
    </div>
  );
}