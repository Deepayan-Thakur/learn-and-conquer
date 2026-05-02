const search = async () => {
    try {
        const query = process.argv[2];
        const res = await fetch(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`); 
        const text = await res.text();
        const videoIds = text.match(/"videoId":"([^"]+)"/g);
        const titles = text.match(/"title":\{"runs":\[\{"text":"([^"]+)"/g);
        if (videoIds && videoIds.length > 0) {
            for (let i = 0; i < Math.min(1, videoIds.length); i++) {
                console.log("https://www.youtube.com/watch?v=" + videoIds[i].replace('"videoId":"', '').replace('"', ''), titles ? titles[i] : "");
            }
        } else {
            console.log("No video found");
        }
    } catch(e) {
        console.error(e);
    }
}
search();
