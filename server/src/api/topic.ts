import { Elysia, t, type Static } from "elysia";

const ItemSchema = t.Object({
  id: t.String(),
  name: t.String(),
  description: t.Optional(t.String()),
  image: t.Nullable(t.String()),
});

export type Item = Static<typeof ItemSchema>;

const TopicSchema = t.Object({
  id: t.String(),
  title: t.String(),
  ownerToken: t.String(),
  items: t.Array(ItemSchema),
});

export type Topic = Static<typeof TopicSchema>;

const topicsInMemory: Array<Topic> = [
  {
    id: "1",
    title: "Best Neovim Colorscheme",
    ownerToken: "987",
    items: [
      {
        id: "21",
        name: "Gruvbox",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMpzqcq3rKrcDjxeV16U5az9WgPg86S-v6w&s",
        description:
          "Designed as a bright theme with pastel 'retro groove' colors and light/dark mode switching in the way of solarized.",
      },
      {
        id: "22",
        name: "Catpuccin",
        image:
          "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png",
        description: "Soothing pastel theme for the high-spirited!",
      },
      {
        id: "23",
        name: "Kanagawa",
        image:
          "https://w7.pngwing.com/pngs/506/832/png-transparent-emoji-the-great-wave-off-kanagawa-sticker-sun-on-the-lake-emoji-logo-car-smiley-thumbnail.png",
        description:
          "NeoVim dark colorscheme inspired by the colors of the famous painting by Katsushika Hokusai.",
      },
      {
        id: "24",
        name: "Tokyo Night",
        image: null,
      },
      {
        id: "25",
        name: "Nord",
        image: null,
      },
    ],
  },
  {
    id: "2",
    title: "Best front-end framework",
    ownerToken: "123",
    items: [
      {
        id: "1",
        name: "React",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        description: "The library for web and native user interfaces",
      },
      {
        id: "2",
        name: "Next",
        image:
          "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
        description:
          "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
      },
      {
        id: "3",
        name: "Vue",
        image:
          "https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png",
        description:
          "An approachable, performant and versatile framework for building web user interfaces.",
      },
      {
        id: "4",
        name: "Svelte",
        image: null,
      },
      {
        id: "5",
        name: "Solid",
        image: null,
      },
      {
        id: "6",
        name: "Nuxt",
        image: null,
      },
      {
        id: "7",
        name: "Laravel",
        image: null,
      },
      {
        id: "8",
        name: "Ruby On Rails",
        image: null,
      },
      {
        id: "9",
        name: "Astro",
        image: null,
      },
    ],
  },
];

export const topicRoute = new Elysia({ prefix: "/topic" }).get(
  "/all",
  ({ error }) => {
    if (topicsInMemory.length === 0) {
      return error(404, "No topics found");
    }

    return topicsInMemory;
  },
  // { response: t.Array(TopicSchema) },
);
