module.exports = {
  name: "play",
  code: `
  $title[💿 AutoPlay] 
  $description[[$songInfo[title] - $humanizeMs[$songInfo[duration]]](https://www.youtube.com/watch?v=$songInfo[id])]
  $thumbnail[$songInfo[thumbnail]]
  $footer[Requested By: $username
  $playTrack[ambulance mcr;youtube]
  $joinVc
  $color[Random]
`,
};
