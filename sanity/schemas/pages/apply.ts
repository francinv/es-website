export default {
  name: 'apply',
  title: 'Apply',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'information',
      title: 'Upcoming information',
      type: 'array',
      of: [{type: 'info'}],
    }
  ],
}
