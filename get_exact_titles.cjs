const query = "PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2";
const fetchPlaylist = async () => {
    try {
        const res = await fetch(`https://www.youtube.com/playlist?list=${query}`);
        const text = await res.text();
        const scriptRegex = /var ytInitialData = (\{.*?\});<\/script>/;
        const match = text.match(scriptRegex);
        if (match && match[1]) {
            const data = JSON.parse(match[1]);
            const tabs = data.contents.twoColumnBrowseResultsRenderer.tabs;
            const playlistVideoListRenderer = tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer;
            const contents = playlistVideoListRenderer.contents;
            
            contents.forEach((item, index) => {
                if (item.playlistVideoRenderer) {
                    const video = item.playlistVideoRenderer;
                    const title = video.title.runs[0].text;
                    const videoId = video.videoId;
                    console.log(`Index ${index + 1}: ${title} - https://www.youtube.com/watch?v=${videoId}&list=${query}&index=${index + 1}`);
                }
            });
        }
    } catch(e) {
        console.error(e);
    }
}
fetchPlaylist();
