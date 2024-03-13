const notifications = {
  name: "notifications",
  title: "Notifications",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
  ],
};

export default notifications;
