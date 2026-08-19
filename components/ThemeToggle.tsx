"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "optimafy-theme";
const THEME_EVENT = "optimafy-theme-change";

type Theme = "light" | "dark";

// The theme is owned by the DOM (the <html class="dark"> toggled by the
// inline bootstrap script in app/layout.tsx), not by React state. Reading it
// through useSyncExternalStore keeps the component correctly synced across
// tabs/toggles without ever calling setState from inside an effect.
function subscribeToTheme(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

// Mounted-on-client flag, also expressed as an external store so the icon
// swap never renders before hydration is complete (avoids SSR mismatch).
function subscribeNoop() {
  return () => {};
}

function getMountedSnapshot() {
  return true;
}

function getServerMountedSnapshot() {
  return false;
}

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
  const mounted = useSyncExternalStore(subscribeNoop, getMountedSnapshot, getServerMountedSnapshot);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist.
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={theme === "dark"}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] text-zinc-600 dark:text-mist-soft hover:text-zinc-900 dark:hover:text-mist hover:border-zinc-400 dark:hover:border-white/30 transition-colors duration-300 ${className}`}
    >
      {/* Avoid rendering an icon that doesn't match the pre-hydration theme */}
      {mounted && (
        <>
          <Sun
            className={`w-4 h-4 transition-all duration-300 ${
              theme === "dark" ? "scale-0 opacity-0 absolute rotate-90" : "scale-100 opacity-100"
            }`}
          />
          <Moon
            className={`w-4 h-4 transition-all duration-300 ${
              theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0 absolute -rotate-90"
            }`}
          />
        </>
      )}
    </button>
  );
}
