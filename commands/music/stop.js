module.exports = {
  name: "stop",
  aliases: "s",
  code: `
  $title[Stop music]
  $description[Lagu dihentikan oleh <@$authorID>]
  $color[Random]
  $footer[Stoped By: $username]
  $leaveVC
  $stopTrack
  `,
};
