import {store} from "../store";
import {setDark, setLight} from "./themeSlice";

export const setThemeHandle = (isDark) => {
    isDark ? store.dispatch(setDark()) : store.dispatch(setLight())
}
