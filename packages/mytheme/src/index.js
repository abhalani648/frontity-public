import Root from "./components";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./handlers/menu-handler";
import acfOpt from "./handlers/acf";


const myFirstTheme = {
  name:  "mytheme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: false,
      menuUrl: "main_menu",
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
      beforeSSR: async ({state,actions}) =>{
        
        await Promise.all([
          actions.source.fetch("acf-settings"),
        ]);
        await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
        //await actions.source.fetch(`/home/`);
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    },
    source: {
      handlers: [acfOpt]
    },
  },
}

export default myFirstTheme; 