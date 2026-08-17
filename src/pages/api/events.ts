import { getCollection } from "astro:content";

export async function GET() {
  const events = (await getCollection("events")).sort(
    (a, b) => a.data.date.getTime() - b.data.date.getTime(),
  );

  return new Response(
    JSON.stringify(
      events.map((event) => ({
        id: event.id,
        title: event.data.title,
        date: event.data.date,
        endDate: event.data.endDate ?? null,
        location: event.data.location,
        category: event.data.category,
        featured: event.data.featured,
        body: event.body,
      })),
    ),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
}
