const WP_API = process.env.WP_URL;

async function fetcher(query, {variables} = {}) {
    const data = await fetch(WP_API, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({
        query,
        variables,
        }),
    });
    const json = await data.json();

    return json;
}

export default fetcher;