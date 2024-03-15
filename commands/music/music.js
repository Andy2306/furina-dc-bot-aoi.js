module.exports = [
  {
    name: "play",
    aliases: "p",
    code: `
    $title[💿 Sedang memutar musik] 
    $description[[$songInfo[title] - $humanizeMs[$songInfo[duration]]](https://www.youtube.com/watch?v=$songInfo[id])]
    $thumbnail[$songInfo[thumbnail]]
    $footer[Requested By: $username]
    $color[Random]
    $addTimestamp
    $playTrack[$message;youtube]
    $joinVc
    $addButton[1;🚫;danger;stop]
    $addButton[1;⏸️;primary;pause]
    $addButton[1;▶️;primary;resume]`,
  },
  {
    name: "pause",
    type: "interaction",
    prototype: "button",
    code: `
    $pauseTrack
    $interactionReply[Lagu dijeda!]`,
  },
  {
    name: "resume",
    type: "interaction",
    prototype: "button",
    code: `
    $resumeTrack
    $interactionReply[Lagu dilanjutkan !]`,
  },
  {
    name: "stop",
    type: "interaction",
    prototype: "button",
    code: `
    $stopTrack
	$leaveVC
    $interactionReply[Lagu dihentikan!]`,
  },
];
