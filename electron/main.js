"use strict";

const { app, BrowserWindow, shell, Menu } = require("electron");
const serve = require("electron-serve");
const path = require("path");

const isDev = !app.isPackaged;

// Resolve the directory that contains the Next.js static export.
// • Development / preview  : <repo-root>/out
// • Packaged .exe / .dmg   : resources/out  (copied via extraResources)
const outDirectory = isDev
  ? path.join(__dirname, "..", "out")
  : path.join(process.resourcesPath, "out");

// Register the custom app:// protocol that maps to the static export folder.
const loadURL = serve({ directory: outDirectory });

/**
 * Build the native application menu (minimal but sensible defaults).
 */
function buildMenu(win) {
  const isMac = process.platform === "darwin";

  const template = [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: "about" },
              { type: "separator" },
              { role: "services" },
              { type: "separator" },
              { role: "hide" },
              { role: "hideOthers" },
              { role: "unhide" },
              { type: "separator" },
              { role: "quit" },
            ],
          },
        ]
      : []),
    {
      label: "Navigate",
      submenu: [
        {
          label: "Home",
          accelerator: "CmdOrCtrl+Shift+H",
          click: () => loadURL(win),
        },
        { type: "separator" },
        {
          label: "Leveling Guide",
          click: () => win.loadURL("app://./leveling-guide/"),
        },
        { label: "Items Database", click: () => win.loadURL("app://./items/") },
        {
          label: "Crafting Simulator",
          click: () => win.loadURL("app://./crafting/"),
        },
        { label: "Pro Builds", click: () => win.loadURL("app://./builds/") },
        { label: "News", click: () => win.loadURL("app://./news/") },
      ],
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        ...(isDev ? [{ role: "toggleDevTools" }] : []),
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { type: "separator" },
        { role: "togglefullscreen" },
      ],
    },
    {
      label: "Window",
      submenu: [
        { role: "minimize" },
        { role: "zoom" },
        ...(isMac
          ? [
              { type: "separator" },
              { role: "front" },
              { type: "separator" },
              { role: "window" },
            ]
          : [{ role: "close" }]),
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 960,
    minHeight: 640,
    icon: path.join(__dirname, "..", "src", "app", "favicon.ico"),
    title: "PoE Companion",
    backgroundColor: "#0d0c0b",
    show: false, // show after ready-to-show to avoid white flash
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // No remote content allowed — security hardening
      webSecurity: true,
      allowRunningInsecureContent: false,
    },
  });

  buildMenu(win);

  // Show only when fully loaded to avoid an ugly white flash.
  win.once("ready-to-show", () => win.show());

  // Open external links (https://) in the system browser, not inside Electron.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https://") || url.startsWith("http://")) {
      shell.openExternal(url);
      return { action: "deny" };
    }
    return { action: "allow" };
  });

  // Also intercept normal <a href> navigations to external URLs.
  win.webContents.on("will-navigate", (event, navigationUrl) => {
    const parsed = new URL(navigationUrl);
    if (parsed.protocol !== "app:") {
      event.preventDefault();
      shell.openExternal(navigationUrl);
    }
  });

  loadURL(win);
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
