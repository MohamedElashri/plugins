const plugin: Fig.Plugin = {
  name: "ztouch",
  type: "shell",
  description: "ZSH plugin for iTerm2 and Mac Touch Bar",
  github: "mjrafferty/ztouch",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;