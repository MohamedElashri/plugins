const plugin: Fig.Plugin = {
  name: "node.plugin.zsh_srijanshetty",
  type: "shell",
  description: "Node plugin for antigen derivatives",
  authors: [
    {
      name: "srijanshetty",
      github: "srijanshetty",
      twitter: "srijanshetty",
    }
  ],
  github: "srijanshetty/node.plugin.zsh",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["node.plugin.zsh"],
  },
};

export default plugin;