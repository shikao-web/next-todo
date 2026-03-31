import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker の実行を軽量にするため standalone 出力を有効化
  output: "standalone",
};

export default nextConfig;
