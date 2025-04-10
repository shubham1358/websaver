// A mock function to mimic making an async request for data
export const addPage = async (url: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  const result: { message?: string; error?: string } = await response.json();

  return result;
};
