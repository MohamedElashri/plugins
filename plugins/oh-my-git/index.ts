const plugin: Fig.Plugin = {
  name: "oh-my-git",
  type: "shell",
  icon: "images/git-icon.svg",
  screenshots: ["images/prompt.png"],
  description: "An opinionated git prompt for bash and zsh",
  authors: [
    {
      name: "arialdomartini",
      github: "arialdomartini",
      twitter: "arialdomartini",
    },
  ],
  github: "arialdomartini/oh-my-git",
  license: ["MIT"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["prompt.sh"],
  },

  configuration: [
    {
      displayName: "Display has Upstream",
      type: "environmentVariable",
      name: "omg_display_has_upstream",
      interface: "toggle",
      default: false,
    },
    {
      displayName: "Display Tag",
      type: "environmentVariable",
      name: "omg_display_tag",
      interface: "toggle",
      default: false,
    },
    {
      displayName: "Display Tag Name",
      type: "environmentVariable",
      name: "omg_display_tag_name",
      interface: "toggle",
      default: true,
    },
    {
      displayName: "Two Lines",
      type: "environmentVariable",
      name: "omg_two_lines",
      interface: "toggle",
      default: false,
    },
    {
      displayName: "Customizing symbols",
      description:
        "Change the icons representing various states of your git repository",
      additionalDetails: "By default, oh-my-git assumes that you have ",
      configuration: [
        {
          displayName: "Git Repo Symbol",
          type: "environmentVariable",
          name: "omg_is_a_git_repo_symbol",
          interface: "text",
          default: "❤",
        },
        {
          displayName: "Has Untracked Files Symbol",
          type: "environmentVariable",
          name: "omg_has_untracked_files_symbol",
          interface: "text",
          default: "∿",
        },
        {
          displayName: "Has Adds Symbol",
          type: "environmentVariable",
          name: "omg_has_adds_symbol",
          interface: "text",
          default: "+",
        },
        {
          displayName: "Has Deletions Symbol",
          type: "environmentVariable",
          name: "omg_has_deletions_symbol",
          interface: "text",
          default: "-",
        },
        {
          displayName: "Has Cached Deletions Symbol",
          type: "environmentVariable",
          name: "omg_has_cached_deletions_symbol",
          interface: "text",
          default: "✖",
        },
        {
          displayName: "Has Modifications Symbol",
          type: "environmentVariable",
          name: "omg_has_modifications_symbol",
          interface: "text",
          default: "✎",
        },
        {
          displayName: "Has Cached Modifications Symbol",
          type: "environmentVariable",
          name: "omg_has_cached_modifications_symbol",
          interface: "text",
          default: "☲",
        },
        {
          displayName: "Ready to Commit Symbol",
          type: "environmentVariable",
          name: "omg_ready_to_commit_symbol",
          interface: "text",
          default: "→",
        },
        {
          displayName: "Is On a Tab Symbol",
          type: "environmentVariable",
          name: "omg_is_on_a_tag_symbol",
          interface: "text",
          default: "⌫",
        },
        {
          displayName: "Needs to Merge Symbol",
          type: "environmentVariable",
          name: "omg_needs_to_merge_symbol",
          interface: "text",
          default: "ᄉ",
        },
        {
          displayName: "Has Upstream Symbol",
          type: "environmentVariable",
          name: "omg_has_upstream_symbol",
          interface: "text",
          default: "⇅",
        },
        {
          displayName: "Detached Symbol",
          type: "environmentVariable",
          name: "omg_detached_symbol",
          interface: "text",
          default: "⚯",
        },
        {
          displayName: "Can Fast-Forward Symbol",
          type: "environmentVariable",
          name: "omg_can_fast_forward_symbol",
          interface: "text",
          default: "»",
        },
        {
          displayName: "Has Diverged Symbol",
          type: "environmentVariable",
          name: "omg_has_diverged_symbol",
          interface: "text",
          default: "Ⴤ",
        },
        {
          displayName: "Not Tracked Branch Symbol",
          type: "environmentVariable",
          name: "omg_not_tracked_branch_symbol",
          interface: "text",
          default: "",
        },
        {
          displayName: "Rebase Tracking Branch Symbol",
          type: "environmentVariable",
          name: "omg_rebase_tracking_branch_symbol",
          interface: "text",
          default: "↶",
        },
        {
          displayName: "Merge Tracking Branch Symbol",
          type: "environmentVariable",
          name: "omg_merge_tracking_branch_symbol",
          interface: "text",
          default: "ᄉ",
        },
        {
          displayName: "Should Push Symbol",
          type: "environmentVariable",
          name: "omg_should_push_symbol",
          interface: "text",
          default: "↑",
        },
        {
          displayName: "Has Stashes Symbol",
          type: "environmentVariable",
          name: "omg_has_stashes_symbol",
          interface: "text",
          default: "★",
        },
      ],
    },
  ],
};

export default plugin;
