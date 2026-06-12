```js
// =========================
// DOLLHOUSE THEME ♡
// =========================

presence: {
  status: "idle",
  activities: [
    {
      name: "♡ dollification ♡",
      type: 0,
    },
  ],
},

embeds: {
  colors: {
    // Main Theme
    primary: "#FF8FC7",
    secondary: "#0D0D0D",

    // Status Colors
    success: "#FFB6D9",
    error: "#1A1A1A",
    warning: "#FFD4EA",
    info: "#F5A9D0",

    // Utility
    light: "#FFFFFF",
    dark: "#000000",
    gray: "#6E6E6E",

    // Dollhouse Palette
    blush: "#FFC6E5",
    babyPink: "#FFDDF0",
    cottonCandy: "#FFF0F8",
    rosePink: "#FF8FC7",
    hotPink: "#FF5FAF",

    black: "#000000",
    charcoal: "#111111",

    giveaway: {
      active: "#FF8FC7",
      ended: "#1A1A1A",
    },

    ticket: {
      open: "#FFB6D9",
      claimed: "#FF8FC7",
      closed: "#000000",
      pending: "#B8B8B8",
    },

    economy: "#FF8FC7",
    birthday: "#FFC6E5",
    moderation: "#111111",

    priority: {
      none: "#B8B8B8",
      low: "#FFDDF0",
      medium: "#FFC6E5",
      high: "#FF8FC7",
      urgent: "#FF5FAF",
    },
  },

  footer: {
    text: "♡ Dollhouse ♡",
    icon: null,
  },

  thumbnail: null,

  author: {
    name: "༺♡ Dollhouse ♡༻",
    icon: null,
    url: null,
  },
},

applications: {
  statusColors: {
    pending: "#FFDDF0",
    approved: "#FFB6D9",
    denied: "#000000",
  },
},

economy: {
  currency: {
    name: "petals",
    namePlural: "petals",
    symbol: "♡",
  },

  startingBalance: 100,
  baseBankCapacity: 500000,

  dailyAmount: 250,
  workMin: 25,
  workMax: 150,
  begMin: 10,
  begMax: 75,

  robSuccessRate: 0.35,
  robFailJailTime: 3600000,
},

tickets: {
  priorities: {
    none: {
      emoji: "◌",
      color: "#B8B8B8",
      label: "Unassigned",
    },

    low: {
      emoji: "♡",
      color: "#FFDDF0",
      label: "Sweet",
    },

    medium: {
      emoji: "✦",
      color: "#FFC6E5",
      label: "Lovely",
    },

    high: {
      emoji: "❀",
      color: "#FF8FC7",
      label: "Important",
    },

    urgent: {
      emoji: "♛",
      color: "#FF5FAF",
      label: "Priority",
    },
  },

  defaultPriority: "low",
},

verification: {
  defaultMessage:
    "♡ Welcome to Dollhouse ♡\n\nPlease verify to gain access to the server.",

  defaultButtonText: "✦ Verify ✦",
},

welcome: {
  defaultWelcomeMessage:
    "♡ Welcome {user} to Dollhouse ♡\n✦ You are member #{memberCount} ✦",

  defaultGoodbyeMessage:
    "☾ {user} has left the Dollhouse ☾",

  defaultWelcomeChannel: null,
  defaultGoodbyeChannel: null,
},

counters: {
  defaults: {
    name: "♡ {name}",
    description: "Dollhouse counter",
    type: "voice",
    channelName: "♡・{name}・{count}",
  },

  messages: {
    created: "♡ Created {name}",
    deleted: "☾ Deleted {name}",
    updated: "✦ Updated {name}",
  },

  types: {
    members: {
      name: "♡ Dolls",
      description: "Total dolls in the Dollhouse",
      getCount: (guild) => guild.memberCount.toString(),
    },

    bots: {
      name: "✦ Helpers",
      description: "Bot count",
      getCount: (guild) =>
        guild.members.cache.filter((m) => m.user.bot).size.toString(),
    },

    members_only: {
      name: "❀ Dollies",
      description: "Verified members",
      getCount: (guild) =>
        guild.members.cache.filter((m) => !m.user.bot).size.toString(),
    },
  },
},

messages: {
  noPermission:
    "☾ You do not have permission to do that. ☾",

  cooldownActive:
    "♡ Please wait {time} before using this again. ♡",

  errorOccurred:
    "✦ Something went wrong. ✦",

  missingPermissions:
    "❀ I need more permissions to do that. ❀",

  commandDisabled:
    "☾ This command is sleeping. ☾",

  maintenanceMode:
    "♡ Dollhouse is currently being polished. ♡",
},
```
