declare const __SERVER_PORT__: number;

declare module '*.png' {
  const content: string;
  export default content;
}
