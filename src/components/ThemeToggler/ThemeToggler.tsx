import { MoonIcon } from "../../icons/MoonIcon";
import { SunIcon } from "../../icons/SunIcon";

export interface ThemeTogglerProps {
  darkMode: boolean;
  handleSetDarkMode: () => void;
}

export const ThemeToggler = (props: ThemeTogglerProps) => {
  return (
    <div className="fixed top-5 right-12 flex">
      <span className="px-1">
        <SunIcon />
      </span>
      <label className="relative inline-flex items-center cursor-pointer z-1">
        <input
          onChange={props.handleSetDarkMode}
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={props.darkMode}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <span className="px-1">
        <MoonIcon />
      </span>
    </div>
  );
};
