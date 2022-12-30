export const config = async (api, type, body) => {
    const res = await fetch(api, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return res.json();
  };

export const config2 = async (api, type) => {
    const res = await fetch(api, {
      method: type,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    return await res.json();
  };