const plugin: Fig.Plugin = {
    name: "git-open",
    displayName: "git-open",
    github: "paulirish/git-open",
    license: ["MIT"],
    description: "Type git open to open the repo website (GitHub, GitLab, Bitbucket) in your browser",
    shells: ["zsh"],
    keywords: ["git"],
    categories: ["Convenience Function"],
    installation: {
        origin: "github",
        sourceFiles: "git-open.plugin.zsh",
    },
}
export default plugin;
