export default {
  name: 'student',
  title: 'Student',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mail',
      title: 'Mail',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'current',
      title: 'Current',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    }
  ],
}
