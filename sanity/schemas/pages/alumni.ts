export default {
  name: 'alumni',
  title: 'Alumni Organization',
  type: 'document',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'url',
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
      name: 'quote',
      title: 'Quote',
      type: 'quote',
    }
  ],
}
