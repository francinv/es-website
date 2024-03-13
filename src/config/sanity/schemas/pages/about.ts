const about = {
  name: "about",
  title: "About",
  type: "document",
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
      name: "content_p1",
      title: "Sections - Part 1",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "video",
      title: "Video URL",
      type: "url",
    },
    {
      name: "content_p2",
      title: "Sections - Part 2",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default about;
