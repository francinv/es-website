const semester = {
  name: "semester",
  title: "Semester",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "courses",
      title: "Courses",
      type: "array",
      of: [{ type: "course" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default semester;
