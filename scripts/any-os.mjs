// 平台判据的第二条腿：本机是 Windows 时，读 process.platform 的判据在 win32 下
// 永远成立 —— 这类用例本地全绿、CI（ubuntu）全红。这里把平台钉成「本机不是的那一个」
// 再跑一遍同一份用例。
const pinned = process.platform === "win32" ? "linux" : "win32"
Object.defineProperty(process, "platform", { value: pinned, configurable: true })
await import(new URL("../index.test.mjs", import.meta.url))