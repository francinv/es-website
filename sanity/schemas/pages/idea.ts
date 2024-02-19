export default {
  name: 'idea',
  title: 'Idea',
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
      name: 'contentp1',
      title: 'Content - Part 1',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'video',
      title: 'Video',
      type: 'url',
    },
    {
      name: 'commercializations',
      title: 'Commercializations',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'contentp2',
      title: 'Content - Part 2',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'reference',
      to: [{type: 'contact'}],
    }
  ],
}
