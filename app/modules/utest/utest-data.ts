export const utestRelease = {
  version: "0.1.1",
  repository: "https://github.com/Adriannathan89/utest",
  release: "https://github.com/Adriannathan89/utest/releases/tag/v0.1.1",
  checksum: "https://github.com/Adriannathan89/utest/releases/download/v0.1.1/SHA256SUMS",
  downloads: [
    {
      platform: "Linux",
      architecture: "x86-64 · glibc",
      asset: "utest-v0.1.1-x86_64-unknown-linux-gnu.tar.gz",
      format: ".tar.gz",
      url: "https://github.com/Adriannathan89/utest/releases/download/v0.1.1/utest-v0.1.1-x86_64-unknown-linux-gnu.tar.gz",
      command: "tar -xzf utest-v0.1.1-x86_64-unknown-linux-gnu.tar.gz\nchmod +x utest\nsudo install -m 0755 utest /usr/local/bin/utest",
    },
    {
      platform: "macOS",
      architecture: "Apple Silicon · ARM64",
      asset: "utest-v0.1.1-aarch64-apple-darwin.tar.gz",
      format: ".tar.gz",
      url: "https://github.com/Adriannathan89/utest/releases/download/v0.1.1/utest-v0.1.1-aarch64-apple-darwin.tar.gz",
      command: "tar -xzf utest-v0.1.1-aarch64-apple-darwin.tar.gz\nchmod +x utest\nsudo install -m 0755 utest /usr/local/bin/utest",
    },
    {
      platform: "Windows",
      architecture: "x86-64 · MSVC",
      asset: "utest-v0.1.1-x86_64-pc-windows-msvc.zip",
      format: ".zip",
      url: "https://github.com/Adriannathan89/utest/releases/download/v0.1.1/utest-v0.1.1-x86_64-pc-windows-msvc.zip",
      command: "Expand-Archive .\\utest-v0.1.1-x86_64-pc-windows-msvc.zip\n.\\utest.exe --version\n.\\utest.exe --help",
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
