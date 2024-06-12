module.exports = [
  {
    name: "AutoPlay",
    aliases: "ap",
    code: `
        $title[💿 Sedang memutar musik] 
        $description[[$songInfo[title] - $humanizeMs[$songInfo[duration]]](https://www.youtube.com/watch?v=$songInfo[id])]
        $thumbnail[$songInfo[thumbnail]]
        $footer[Requested By: $username]
        $color[Random]
        $addTimestamp
        $autoPlay[youtube]
        $playTrack[$message;youtube]
        $joinVc`,
  },
];
