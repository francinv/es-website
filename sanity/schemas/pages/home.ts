export default {
  name: 'home',
  title: 'Home',
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
      name: 'video',
      title: 'Video URL',
      type: 'url',
    },
    {
      name: 'posts',
      title: 'Select Posts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}]}],
    },
    {
      name: 'some',
      title: 'Show instragram feed',
      type: 'boolean',
    }
  ],
}
