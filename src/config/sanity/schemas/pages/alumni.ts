const alumni = {
  name: "alumni",
  title: "Alumni Organization",
  type: "document",
  fields: [
    {
      name: "video",
      title: "Video",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default alumni;
