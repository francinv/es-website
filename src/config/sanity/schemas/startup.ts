const startup = {
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "url",
      title: "Website",
      type: "url",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    },
    {
      name: "mail",
      title: "Mail",
      type: "string",
    },
    {
      name: "isInHouse",
      title: "In house startup?",
      type: "boolean",
    },
  ],
};

export default startup;
