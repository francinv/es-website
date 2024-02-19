export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'quote',
    },
    {
      name: 'paragraphs_p1',
      title: 'Paragraphs - Part 1',
      type: 'array',
      of: [{type: 'text'}],
    },
    {
      name: 'video',
      title: 'Video URL',
      type: 'url',
    },
    {
      name: 'paragraphs_p2',
      title: 'Paragraphs - Part 2',
      type: 'array',
      of: [{type: 'text'}],
    }
  ]
}
