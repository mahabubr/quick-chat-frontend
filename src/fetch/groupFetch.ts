import { GROUP_CHAT_URL } from "@/lib/apiEndPoints";

export async function fetchChatGroups(token: string) {
  const res = await fetch(GROUP_CHAT_URL, {
    headers: {
      Authorization: token,
    },
    next: {
      revalidate: 60 * 60,
      tags: ["dashboard"],
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const response = await res.json();
  if (response?.data) {
    return response?.data;
  }
  return [];
}

// export async function fetchChatGroup(id: string) {
//   const res = await fetch(`${GROUP_CHAT_URL}/${id}`, {
//     cache: "no-cache",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const response = await res.json();
//   if (response?.data) {
//     return response?.data;
//   }
//   return null;
// }

// export async function fetchChatGroupUsers(id: string) {
//   const res = await fetch(`${CHAT_GROUP_USERS}?group_id=${id}`, {
//     cache: "no-cache",
//   });

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const response = await res.json();
//   if (response?.data) {
//     return response?.data;
//   }
//   return [];
// }
