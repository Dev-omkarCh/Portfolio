import { create } from 'zustand';

const useTheme = create(( set ) =>({
    theme : localStorage.getItem("theme") === "light" ? false : true,
    setTheme : ( theme ) => set({ theme }),
}));

export default useTheme;