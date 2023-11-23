const axios = require('axios');

async function searchAnime(search) {
    const response = await axios.get(`https://zero-pi--saludeskimdev1.repl.co/anime/gogoanime/${search}`);
    const data = response.data.results;
    const id = await Promise.all(data.map(item => axios.get(`https://zero-pi--saludeskimdev1.repl.co/anime/gogoanime/fetchAnimeInfo/${item.id}`)));
    const info = await id.map(item => item.data);
    return (JSON.stringify(info, null, 2));
}

async function topAiring() {
    const response = await axios.get(`https://zero-pi--saludeskimdev1.repl.co/anime/gogoanime/fetchTopAiring/`);
    const data = response.data.results;
    const id = await Promise.all(data.map(item => axios.get(`https://zero-pi--saludeskimdev1.repl.co/anime/gogoanime/fetchAnimeInfo/${item.id}`)));
    const info = await id.map(item => item.data);
    return (JSON.stringify(info, null, 2));
}


async function recentEpisode() {
    const response = await axios.get(`https://zero-pi--saludeskimdev1.repl.co/anime/gogoanime/fetchRecentEpisodes/`);
    const data = response.data.results;
    return console.log(JSON.stringify(thumbmail, null, 2));
}

async function main () {
    const x = await recentEpisode();
    console.log(x);
}

main();
