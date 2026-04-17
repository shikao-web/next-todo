// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    readonly DATABASE_URL: string;
    readonly BASIC_AUTH_USER: string;
    readonly BASIC_AUTH_PASSWORD: string;
  }
}
