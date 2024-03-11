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
      name: 'image',
      title: 'Image',
      type: 'image',
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
    },
    {
      name: 'video',
        title: 'Video URL',
        type: 'url',

    },
    {
      name: 'video_mobile',
        title: 'Video URL (Mobile)',
        type: 'url',
    }
  ],
}
