export default {
  name: 'programStructure',
  title: 'Program Structure',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'quote',
    },
    {
      name: 'semesters',
      title: 'Semesters',
      type: 'array',
      of: [{type: 'semester'}],
    }
  ]
}
