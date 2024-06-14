require('dotenv').config();
const { AoiClient } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
const { LoadCommands } = require("aoi.js");

const bot = new AoiClient({
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  },
});

const voice = new AoiVoice(bot, {
  searchOptions: {
    soundcloudClientId: "Soundcloud ID", // optional
    youtubegl: "US",
  },
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
});

// Command Example (ping)

bot.command({
  name: "ping",
  code: `
  $description[
  Pong! $pingms
  OS: $cpu[os]
  Process: $cpu[process]
  Ram: \`$ram%\` dari \`$maxRam%\`
  ]`,
});

// Bot variables

bot.variables({
  test: 0,
  FishRandomNumber: 0,
  FishRandomString: "",
  
});

// Bot status
bot.status({
  name: "Sesuatu...",
  type: "STREAMING",
  time: 25,
  url: "https://github.com/Andy2306/furina-dc-bot-aoi.js"
});


// optional (cacher / filter)

voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(
  PluginName.Filter,
  new Filter({
    filterFromStart: false,
  }),
);
voice.bindExecutor(bot.functionManager.interpreter);

bot.loadCommands("./commands/", true);
const loader = new LoadCommands(bot);
loader.load(voice.cmds, "./voice/");