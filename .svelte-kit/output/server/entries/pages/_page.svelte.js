import { c as create_ssr_component, i as add_styles, d as each, v as validate_component, e as escape, a as add_attribute, n as now, l as loop, h as subscribe } from "../../chunks/index2.js";
import { J as JumpButton, j as jumps, A as ArrowUp, c as currentPortfolioIndex, P as PortfolioItems } from "../../chunks/ArrowUp.js";
import { w as writable } from "../../chunks/index.js";
function createStore$1() {
  const { subscribe: subscribe2, set } = writable(false);
  return {
    subscribe: subscribe2,
    show: () => set(true),
    hide: () => set(false)
  };
}
const titleCardVisible = createStore$1();
function createStore() {
  const { subscribe: subscribe2, set } = writable(0);
  return {
    subscribe: subscribe2,
    set: (value) => set(value)
  };
}
const appShellController = createStore();
const myFace = "/_app/immutable/assets/myFace.5373a17d.jpg";
const TitleCard_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.vignette.svelte-102ric7{pointer-events:none;background:radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 15%, rgba(0, 0, 0, 0.05) 35%, rgba(0, 0, 0, 0.1) 65%, rgba(0, 0, 0, 0.45) 100%)}.space-background.svelte-102ric7{background-image:url("../../assets/images/background/kai-pilger-space.jpg") !important}',
  map: null
};
let parallaxSpeed = 1.5;
const TitleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let titleCardVisiblity;
  let { scrollY } = $$props;
  titleCardVisible.subscribe((value) => {
    titleCardVisiblity = value;
  });
  if ($$props.scrollY === void 0 && $$bindings.scrollY && scrollY !== void 0)
    $$bindings.scrollY(scrollY);
  $$result.css.add(css$4);
  return `<div id="title-card" class="h-screen flex items-center justify-center relative z-[0]">${titleCardVisiblity == true ? `<div class="vignette h-screen w-screen fixed z-[2] svelte-102ric7"></div>
            <div class="space-background h-full w-full flex items-center justify-center relative z-[0] svelte-102ric7"><div class="relative z-[3]"${add_styles({
    "transform": `translate3d(0, ${scrollY * parallaxSpeed}px, 0)`
  })}><div class="h-screen flex items-center justify-center"><div class="grid lg:grid-cols-2 gap-x-8 ga-y-1 place-items-center lg:w-[50rem] w-[19rem]"><div class="flex flex-col lg:gap-y-5 gap-1"><h1 class="h1 font-bold lg:text-left text-center">Loejee Miguel L. Dulaugon
                                </h1>
                                <p class="lg:text-[15px] lg:text-left text-center">I am a flexible programmer learner capable of software engineering, game development and web development. 
                                    With tools such as Flutter, Godot Engine and Svelte
                                </p>
                                <div class="grid grid-cols-3 gap-1 lg:gap-3"><a href="/downloads/LoejeeMiguel_Dulaugon_Resume.pdf" class="btn variant-filled !bg-primary-500 !text-white text-[13px] lg:text-[16px]" download>My Resume
                                    </a>
                                    ${each(jumps, (jump) => {
    return `<div>${validate_component(JumpButton, "JumpButton").$$render($$result, { jumpTo: jump.id }, {}, {
      default: () => {
        return `${escape(jump.name)}`;
      }
    })}
                                        </div>`;
  })}</div></div>
                            <img class="object-cover lg:h-96 lg:w-96 h-64 w-64 rounded-full self-center"${add_attribute("src", myFace, 0)} alt="My Face"></div></div></div></div>` : ``}
</div>`;
});
const PortfolioViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const ArrowDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const PortfolioContent_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".bio.svelte-1v9ttgl{display:grid;grid-template-rows:auto auto;justify-content:start}",
  map: null
};
const PortfolioContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagesAtRight = true } = $$props;
  let isLargeScreen = false;
  if ($$props.imagesAtRight === void 0 && $$bindings.imagesAtRight && imagesAtRight !== void 0)
    $$bindings.imagesAtRight(imagesAtRight);
  $$result.css.add(css$3);
  return `<div class="flex flex-col lg:min-h-[34rem] justify-center content-center"><button class="btn">${validate_component(ArrowUp, "ArrowUp").$$render($$result, { size: "2rem" }, {}, {})}</button>
    <div class="overflow-hidden"><div class="grid lg:grid-cols-2 gap-3 justify-items-center overflow-hidden">${imagesAtRight == false || isLargeScreen == false ? `${slots.images ? slots.images({}) : ``}` : ``}
            <div class="bio gap-2 svelte-1v9ttgl">${slots.bio ? slots.bio({}) : ``}
                <div class="grid grid-rows-2 gap-3">${slots.actions ? slots.actions({}) : ``}</div></div>
            ${imagesAtRight == true && isLargeScreen == true ? `${slots.images ? slots.images({}) : ``}` : ``}</div></div>
    <button class="btn">${validate_component(ArrowDown, "ArrowDown").$$render($$result, { size: "2rem" }, {}, {})}</button>
</div>`;
});
class ImageSource {
  src;
  alt = "";
  name = "";
  constructor(src, alt = "", name = "") {
    this.src = src;
    this.alt = alt;
    this.name = name;
  }
}
const Godot = "/_app/immutable/assets/godot.d87f4cc3.svg";
const Flutter = "/_app/immutable/assets/flutter.074a68fc.svg";
const Dart = "/_app/immutable/assets/dart.bd089d39.svg";
const HiveDB = "/_app/immutable/assets/hiveDB.e2c0e2ee.png";
const GoogleAdMob = "/_app/immutable/assets/googleAdMob.d468cd80.svg";
const GithubMark = "/_app/immutable/assets/githubMark.7a0dd11e.svg";
const logos = new Map(
  Object.entries({
    Godot: new ImageSource(
      Godot,
      "Godot Icon",
      "Godot"
    ),
    GDScript: new ImageSource(
      Godot,
      "GDScript Icon",
      "GDScript"
    ),
    Flutter: new ImageSource(
      Flutter,
      "Flutter Icon",
      "Flutter"
    ),
    Dart: new ImageSource(
      Dart,
      "Dart Icon",
      "Dart"
    ),
    HiveDB: new ImageSource(
      HiveDB,
      "HiveDB Icon",
      "HiveDB"
    ),
    GoogleAdMob: new ImageSource(
      GoogleAdMob,
      "GoogleAdMob Icon",
      "AdMob"
    ),
    GithubMark: new ImageSource(
      GithubMark,
      "GithubMark Icon",
      "GithubMark"
    )
  })
);
const LogoButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logo } = $$props;
  let { alt } = $$props;
  let { label } = $$props;
  let { href = "https://github.com/GuyWithBag" } = $$props;
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="btn variant-filled h-6" target="_blank"><img class="h-7 w-7 py-1 object-scale-down"${add_attribute("src", logo, 0)}${add_attribute("alt", alt, 0)}>
    <span>${escape(label)}</span></a>`;
});
const PortfolioContentBio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayLogos } = $$props;
  if ($$props.displayLogos === void 0 && $$bindings.displayLogos && displayLogos !== void 0)
    $$bindings.displayLogos(displayLogos);
  return `<div class="flex flex-col gap-y-5 lg:w-[30rem] w-72 justify-start content-start"><h1 class="h2 font-bold lg:text-[2rem] h-fit">${slots.title ? slots.title({}) : ``}</h1>
    <div class="grid gap-2 justify-start grid-cols-3 overflow-visible grid-flow-dense">${each(displayLogos, (logo) => {
    return `${logos.has(logo) ? `${validate_component(LogoButton, "LogoButton").$$render(
      $$result,
      {
        logo: logos.get(logo)?.src,
        alt: logos.get(logo)?.alt,
        label: logos.get(logo)?.name
      },
      {},
      {}
    )}` : ``}`;
  })}</div>
    <div class="lg:text-xl text-[12px]">${slots.body ? slots.body({}) : ``}</div></div>`;
});
const ArrowLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const PortfolioContentImageCarousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageSources = [] } = $$props;
  let elemCarousel;
  currentPortfolioIndex.subscribe((value) => {
  });
  if ($$props.imageSources === void 0 && $$bindings.imageSources && imageSources !== void 0)
    $$bindings.imageSources(imageSources);
  return `<div class="card p-4 grid grid-cols-[auto_1fr_auto] items-center lg:w-[25rem] object-contain">
	<button type="button" class="btn-icon variant-filled">${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, {}, {}, {})}</button>
	 
	<div class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto"${add_attribute("this", elemCarousel, 0)}>${each(imageSources, (imageSource) => {
    return `<img class="snap-center w-auto rounded-container-token object-contain p-1"${add_attribute("src", imageSource.src, 0)}${add_attribute("alt", imageSource.alt, 0)} loading="lazy">`;
  })}</div>
	
	<button type="button" class="btn-icon variant-filled">${validate_component(ArrowRight, "ArrowRight").$$render($$result, {}, {}, {})}</button></div>`;
});
const MainMenu = "/_app/immutable/assets/main_menu.b0b18c75.png";
const GamePlay = "/_app/immutable/assets/gameplay.09caacb1.png";
const MapsMenu = "/_app/immutable/assets/maps.17bd97a8.png";
const MultiplePlayers = "/_app/immutable/assets/multiple_players_1.5ee0312b.png";
const Maps2 = "/_app/immutable/assets/maps_2.d327e941.png";
const MultiplePlayers2 = "/_app/immutable/assets/multiple_players_2.0a3caca8.png";
const Victory = "/_app/immutable/assets/victory.8906a09a.png";
const chainReactionImages = [
  new ImageSource(
    MainMenu,
    "Main Menu"
  ),
  new ImageSource(
    GamePlay,
    "Gameplay"
  ),
  new ImageSource(
    MapsMenu,
    "Maps Menu"
  ),
  new ImageSource(
    MultiplePlayers,
    "Gameplay 2"
  ),
  new ImageSource(
    Maps2,
    "Maps Menu 2"
  ),
  new ImageSource(
    MultiplePlayers2,
    "Gameplay e"
  ),
  new ImageSource(
    Victory,
    "Victory Screen"
  )
];
const HomePage = "/_app/immutable/assets/home_page.ed323009.png";
const MorseCodeWrite = "/_app/immutable/assets/morse_code_write.f1969033.png";
const SaveHistory = "/_app/immutable/assets/save_history.13f683f4.png";
const Save = "/_app/immutable/assets/save.a9138f14.png";
const morseCodeTorchImages = [
  new ImageSource(
    HomePage,
    "Home Page"
  ),
  new ImageSource(
    MorseCodeWrite,
    "Writing Morse Code"
  ),
  new ImageSource(
    SaveHistory,
    "Save History Page"
  ),
  new ImageSource(
    Save,
    "Saving"
  )
];
const GooglePlayButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@font-face{font-family:'fontfutura';src:url('https://fonts.googleapis.com/css?family=Open+Sans') format('ttf');font-weight:normal;font-style:normal}a.btn-google.svelte-76j597{color:#fff}.btn.svelte-76j597{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;font-weight:500;text-decoration:none;display:inline-block}.btn.svelte-76j597:active:focus,.btn.svelte-76j597:focus{outline:0}.btn.svelte-76j597:focus,.btn.svelte-76j597:hover{color:#333;text-decoration:none;outline:0}.btn.svelte-76j597:active{outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);box-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125)}.btn-google.svelte-76j597{color:#fff;background-color:#111;border-color:#000;padding:15px 16px 5px 40px;position:relative;font-family:fontfutura;font-weight:600}.btn-google.svelte-76j597:focus{color:#fff;background-color:#555;border-color:#000}.btn-google.svelte-76j597:active,.btn-google.svelte-76j597:hover{color:#fff;background-color:#555;border-color:#000}.btn-google.svelte-76j597:before{content:'';background-image:url(https://4.bp.blogspot.com/-52U3eP2JDM4/WSkIT1vbUxI/AAAAAAAArQA/iF1BeARv2To-2FGQU7V6UbNPivuv_lccACLcB/s30/nexus2cee_ic_launcher_play_store_new-1.png);background-size:cover;background-repeat:no-repeat;width:30px;height:30px;position:absolute;left:6px;top:50%;margin-top:-15px}.btn-google.svelte-76j597:after{content:'GET IT ON';position:absolute;top:5px;left:40px;font-size:10px;font-weight:400}",
  map: null
};
const GooglePlayButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$2);
  return `<a class="btn btn-google svelte-76j597"${add_attribute("href", href, 0)} title="Google Play">Google Play</a>`;
});
const AudioPlayerImage = "/_app/immutable/assets/audio_player.8474e8dc.jpg";
const PlaylistList = "/_app/immutable/assets/playlist_list.987a7107.jpg";
const PlaylistPage = "/_app/immutable/assets/playlist_page.f14fd11e.jpg";
const SearchResults = "/_app/immutable/assets/search_results.67751409.jpg";
const Settings = "/_app/immutable/assets/settings.72d8d8c3.jpg";
const SongListDrag = "/_app/immutable/assets/song_list_drag.0aeb5712.jpg";
const SongMoreOptions = "/_app/immutable/assets/song_more_options.deaad98b.jpg";
const AddToPlaylist = "/_app/immutable/assets/add_to_playlist.9c823056.jpg";
const musicPlayerImages = [
  new ImageSource(
    AudioPlayerImage,
    "Audio Player Image"
  ),
  new ImageSource(
    PlaylistList,
    "Playlist List"
  ),
  new ImageSource(
    PlaylistPage,
    "Playlist Page"
  ),
  new ImageSource(
    SearchResults,
    "Search Results"
  ),
  new ImageSource(
    Settings,
    "Settings"
  ),
  new ImageSource(
    SongListDrag,
    "Song List Drag"
  ),
  new ImageSource(
    SongMoreOptions,
    "Song More Options"
  ),
  new ImageSource(
    AddToPlaylist,
    "Add To Playlist"
  )
];
const About_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".blue-feel.svelte-88uy98{background-image:url('../../assets/images/background/blue_feel.png') !important}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="h-screen"><div id="about" class="blue-feel flex h-screen items-center justify-center relative z-[1] svelte-88uy98">${``}</div>
</div>`;
});
const Contacts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="contacts" class="flex h-screen items-center justify-center bg-slate-950">${``}</div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".vignette.svelte-12pvids{pointer-events:none;background:radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 59%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.1) 86%, rgba(0, 0, 0, 0.45) 100%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $appShellController, $$unsubscribe_appShellController;
  $$unsubscribe_appShellController = subscribe(appShellController, (value) => $appShellController = value);
  let curPortfolioIndex;
  currentPortfolioIndex.subscribe((value) => {
    curPortfolioIndex = value;
  });
  spring({ x: 50, y: 50 }, { stiffness: 0.1, damping: 0.25 });
  spring(10);
  $$result.css.add(css);
  $$unsubscribe_appShellController();
  return `

<div class="vignette fixed w-screen h-screen z-20 svelte-12pvids"></div>

<div>${validate_component(TitleCard, "TitleCard").$$render($$result, { scrollY: $appShellController }, {}, {})}
	<div class="relative z-10"><div class="min-h-screen py-24 px-20 bg-surface-500 flex items-center justify-center rounded-3xl" id="works-container"><div class="px-[10rem]">${validate_component(PortfolioViewer, "PortfolioViewer").$$render($$result, {}, {}, {
    default: () => {
      return `${curPortfolioIndex == PortfolioItems.MUSIC_PLAYER ? `${validate_component(PortfolioContent, "PortfolioContent").$$render($$result, {}, {}, {
        images: () => {
          return `<div slot="images">${validate_component(PortfolioContentImageCarousel, "PortfolioContentImages").$$render($$result, { imageSources: musicPlayerImages }, {}, {})}</div>`;
        },
        actions: () => {
          return `<div slot="actions"><a class="btn variant-filled" href="https://github.com/GuyWithBag/my_music_player" target="_blank"><img class="h-5"${add_attribute("src", logos.get("GithubMark")?.src, 0)}${add_attribute("alt", logos.get("GithubMark")?.alt, 0)}>
									<span>Github</span></a></div>`;
        },
        bio: () => {
          return `<div slot="bio">${validate_component(PortfolioContentBio, "PortfolioContentBio").$$render(
            $$result,
            {
              displayLogos: ["Flutter", "Dart", "HiveDB"]
            },
            {},
            {
              body: () => {
                return `<p slot="body">I was tired of finding things that are lacking in most music players. <br>
										<br>
										So i have decided to make my own! This is a work-in-progress project that aims to have a cloud containing 
										all your music that you have downloaded shared across various platforms <br> 
										Not only that, but it will have an option where you can play the music while overlapping with other audios. 
									</p>`;
              },
              title: () => {
                return `<span slot="title">Music Player (W.I.P.)</span>`;
              }
            }
          )}</div>`;
        }
      })}` : `${curPortfolioIndex == PortfolioItems.MORSE_CODE_TORCH ? `${validate_component(PortfolioContent, "PortfolioContent").$$render($$result, {}, {}, {
        images: () => {
          return `<div slot="images">${validate_component(PortfolioContentImageCarousel, "PortfolioContentImages").$$render($$result, { imageSources: morseCodeTorchImages }, {}, {})}</div>`;
        },
        actions: () => {
          return `<div slot="actions">${validate_component(GooglePlayButton, "GooglePlayButton").$$render(
            $$result,
            {
              href: "https://play.google.com/store/apps/details?id=org.MacchiMatchaProductions.morse_code_torch"
            },
            {},
            {}
          )}
								<a class="btn variant-filled" href="https://github.com/GuyWithBag/morse_code_torch" target="_blank"><img class="h-5"${add_attribute("src", logos.get("GithubMark")?.src, 0)}${add_attribute("alt", logos.get("GithubMark")?.alt, 0)}>
									<span>Github</span></a></div>`;
        },
        bio: () => {
          return `<div slot="bio">${validate_component(PortfolioContentBio, "PortfolioContentBio").$$render(
            $$result,
            {
              displayLogos: ["Flutter", "Dart", "HiveDB", "GoogleAdMob"]
            },
            {},
            {
              body: () => {
                return `<p slot="body">A fun, useful app that you and your friends can use in order to communicate to each other at night in long distances using your flashlight. <br>
										<br>
										Features: <br>
										- Save your previous morse codes <br>
										- Change the duration of each unit <br>
										- Morse-code to text, text to Morse-code <br></p>`;
              },
              title: () => {
                return `<span slot="title">Morse Code Torch</span>`;
              }
            }
          )}</div>`;
        }
      })}` : `${curPortfolioIndex == PortfolioItems.CHAIN_REACTION_ATOM ? `${validate_component(PortfolioContent, "PortfolioContent").$$render($$result, { imagesAtRight: false }, {}, {
        images: () => {
          return `<div slot="images">${validate_component(PortfolioContentImageCarousel, "PortfolioContentImages").$$render($$result, { imageSources: chainReactionImages }, {}, {})}</div>`;
        },
        actions: () => {
          return `<div slot="actions">${validate_component(GooglePlayButton, "GooglePlayButton").$$render($$result, { href: "https://github.com/GuyWithBag" }, {}, {})}</div>`;
        },
        bio: () => {
          return `<div slot="bio">${validate_component(PortfolioContentBio, "PortfolioContentBio").$$render(
            $$result,
            {
              displayLogos: ["Godot", "GDScript", "GoogleAdMob"]
            },
            {},
            {
              body: () => {
                return `<p slot="body">Chain Reaction Atom Revamped Supreme is your classic childhood strategy game re-imagined in a much more colorful/modern settings. This revamp shows much more explosive and expressive graphics and animations. <br>
										<br>
										Summary: <br>
										- Win the game by capturing all the enemy&#39;s atoms / colors by expanding your army of atoms in a strategic way by overloading your atoms. Which will start a chain reaction showing a colorful firework display until it destroys your enemies! <br></p>`;
              },
              title: () => {
                return `<span slot="title">Chain Reaction: Atom Supreme Revamped</span>`;
              }
            }
          )}</div>`;
        }
      })}` : ``}`}`}`;
    }
  })}</div></div>
		${validate_component(About, "About").$$render($$result, {}, {}, {})}
		${validate_component(Contacts, "Contacts").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
