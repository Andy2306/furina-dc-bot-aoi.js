require('dotenv').config();
const { AoiClient } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");
const { LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  },
});

const voice = new AoiVoice(client, {
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
  searchOptions: {
   youtubeClient: "WEB"
  }
});

// Command Example (ping)
client.command({
  name: "ping",
  code: `Pong! $pingms`,
});

// optional (cacher / filter)
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false
})),

voice.bindExecutor(client.functionManager.interpreter);

client.loadCommands("./commands/", true);
const loader = new LoadCommands(client);
loader.load(voice.cmds, "./voice/");