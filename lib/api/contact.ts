export async function submitContact(data: any) {

  const response = await fetch("/api/contact", {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Message failed");
  }

  return response.json();
}