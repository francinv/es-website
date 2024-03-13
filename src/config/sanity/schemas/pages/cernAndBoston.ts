const cernAndBoston = {
  name: "cernAndBoston",
  title: "CERN & Boston",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "video",
      title: "Video",
      type: "url",
    },
    {
      name: "cernImage",
      title: "CERN Image",
      type: "image",
    },
    {
      name: "cernContent",
      title: "CERN Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "bostonImage",
      title: "Boston Image",
      type: "image",
    },
    {
      name: "bostonContent",
      title: "Boston Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default cernAndBoston;
