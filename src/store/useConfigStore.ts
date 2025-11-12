import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Theme = "light" | "dark" | "auto";
type Language = "en" | "vi";

interface ConfigState {
  theme: Theme;
  language: Language;
  sidebarCollapsed: boolean;
  notifications: boolean;

  // Actions
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setNotifications: (enabled: boolean) => void;
  resetConfig: () => void;
}

const defaultConfig = {
  theme: "light" as Theme,
  language: "vi" as Language,
  sidebarCollapsed: false,
  notifications: true,
};

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      ...defaultConfig,

      setTheme: (theme) =>
        set({
          theme,
        }),

      setLanguage: (language) =>
        set({
          language,
        }),

      toggleSidebar: () =>
        set((state) => ({
          sidebarCollapsed: !state.sidebarCollapsed,
        })),

      setSidebarCollapsed: (collapsed) =>
        set({
          sidebarCollapsed: collapsed,
        }),

      setNotifications: (enabled) =>
        set({
          notifications: enabled,
        }),

      resetConfig: () => set(defaultConfig),
    }),
    {
      name: "config-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
