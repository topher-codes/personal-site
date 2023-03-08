const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export async function searchBlogPosts(searchTerm: string) {
  const results = await fetcher({
    url: "/api/search",
    method: "POST",
    body: { searchTerm },
  });
  return results;
}

export async function signIn(email: string, password: string) {
  const results = await fetcher({
    url: "/api/signin",
    method: "POST",
    body: { email, password },
  });
  return results;
}
