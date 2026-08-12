export const rettpRelease = {
  version: "0.1.0",
  repository: "https://github.com/Adriannathan89/ReTTP",
  release: "https://github.com/Adriannathan89/ReTTP/releases/tag/v0.1.0",
  checksum: "https://github.com/Adriannathan89/ReTTP/releases/download/v0.1.0/SHA256SUMS",
  downloads: [
    {
      platform: "Linux",
      architecture: "x86-64 · glibc",
      asset: "rettp-v0.1.0-x86_64-unknown-linux-gnu.tar.gz",
      format: ".tar.gz",
      url: "https://github.com/Adriannathan89/ReTTP/releases/download/v0.1.0/rettp-v0.1.0-x86_64-unknown-linux-gnu.tar.gz",
      command: "tar -xzf rettp-v0.1.0-x86_64-unknown-linux-gnu.tar.gz\nchmod +x rettp\nsudo install -m 0755 rettp /usr/local/bin/rettp",
    },
    {
      platform: "macOS",
      architecture: "Apple Silicon · ARM64",
      asset: "rettp-v0.1.0-aarch64-apple-darwin.tar.gz",
      format: ".tar.gz",
      url: "https://github.com/Adriannathan89/ReTTP/releases/download/v0.1.0/rettp-v0.1.0-aarch64-apple-darwin.tar.gz",
      command: "tar -xzf rettp-v0.1.0-aarch64-apple-darwin.tar.gz\nchmod +x rettp\nsudo install -m 0755 rettp /usr/local/bin/rettp",
    },
    {
      platform: "Windows",
      architecture: "x86-64 · MSVC",
      asset: "rettp-v0.1.0-x86_64-pc-windows-msvc.zip",
      format: ".zip",
      url: "https://github.com/Adriannathan89/ReTTP/releases/download/v0.1.0/rettp-v0.1.0-x86_64-pc-windows-msvc.zip",
      command: "Expand-Archive .\\rettp-v0.1.0-x86_64-pc-windows-msvc.zip\n.\\rettp.exe --version\n.\\rettp.exe --help",
    },
  ],
  highlights: [
    "Syntax and semantic validation without network access",
    "HTTP(S) checks with status, header, text, and typed JSON assertions",
    "Sequential core and pipeline execution with typed response captures",
    "Redacted terminal, JSON, and JUnit XML reports",
  ],
  releaseNotes: [
    ["Added", "UTF-8 DSL parser, semantic validation, and source-span diagnostics."],
    ["Added", "HTTP adapter with seven methods, bounded responses, timeouts, and redirect rejection."],
    ["Added", "Atomic typed captures, interpolation, CLI and dotenv variables, plus stable exit codes."],
  ],
} as const;
