import { c as create_ssr_component, a as add_attribute, e as escape } from "./index2.js";
import { w as writable } from "./index.js";
class Jump {
  id;
  name;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
const jumps = [
  new Jump("works-container", "My Works"),
  new Jump("about", "About Me"),
  new Jump("contacts", "Contacts")
];
const JumpButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "btn variant-filled" } = $$props;
  let { jumpTo } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.jumpTo === void 0 && $$bindings.jumpTo && jumpTo !== void 0)
    $$bindings.jumpTo(jumpTo);
  return `
<a><button type="button"${add_attribute("class", style, 0)}>${slots.default ? slots.default({}) : ``}</button></a>`;
});
var PortfolioItems = /* @__PURE__ */ ((PortfolioItems2) => {
  PortfolioItems2[PortfolioItems2["MUSIC_PLAYER"] = 0] = "MUSIC_PLAYER";
  PortfolioItems2[PortfolioItems2["MORSE_CODE_TORCH"] = 1] = "MORSE_CODE_TORCH";
  PortfolioItems2[PortfolioItems2["CHAIN_REACTION_ATOM"] = 2] = "CHAIN_REACTION_ATOM";
  return PortfolioItems2;
})(PortfolioItems || {});
function createStore() {
  const { subscribe, set, update } = writable(0);
  let itemsLength = Object.keys(PortfolioItems).length / 2;
  return {
    subscribe,
    next: () => update(
      (n) => {
        if (n + 1 >= itemsLength) {
          return 0;
        }
        return n + 1;
      }
    ),
    back: () => update(
      (n) => {
        if (n - 1 < 0) {
          return itemsLength - 1;
        }
        return n - 1;
      }
    ),
    set: (index) => set(index)
  };
}
const currentPortfolioIndex = createStore();
const ArrowUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaHidden = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { desc = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0)
    $$bindings.ariaHidden(ariaHidden);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
export {
  ArrowUp as A,
  JumpButton as J,
  PortfolioItems as P,
  currentPortfolioIndex as c,
  jumps as j
};
