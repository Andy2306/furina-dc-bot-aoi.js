module.exports = {
  name: "fish",
  aliases: "mancing",
  code: `
    $setUserVar[FishRandomString;$randomText[text1;text2;text3]]
    Isi string : $getUserVar[FishRandomString]
    `,
};
