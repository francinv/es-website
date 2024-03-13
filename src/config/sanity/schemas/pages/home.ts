const home = {
  name: "home",
  title: "Home",
  type: "document",
  _type: "home",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "quote",
      title: "Quote",
      type: "quote",
    },
    {
      name: "video",
      title: "Video URL",
      type: "url",
    },
    {
      name: "posts",
      title: "Select Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    },
    {
      name: "some",
      title: "What IG posts to show",
      type: "array",
      of: [
        {
          type: "url",
        },
      ],
    },
  ],
};

export default home;
