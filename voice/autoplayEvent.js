module.exports = [
  {
    channel: "1106818951918395392",
    type: "trackStart",
    code: `
    $title[💿 AutoPlay] 
    $description[[$songInfo[title] - $humanizeMs[$songInfo[duration]]](https://www.youtube.com/watch?v=$songInfo[id])]
    $thumbnail[$songInfo[thumbnail]]
    $footer[Requested By: $username]
    $color[Random]
    $addTimestamp`,
  },
];
