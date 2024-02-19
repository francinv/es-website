export default {
  name: 'cernAndBoston',
  title: 'CERN & Boston',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'url',
    },
    {
      name: 'cernImages',
      title: 'CERN Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'cernContent',
      title: 'CERN Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'bostonImages',
      title: 'Boston Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'bostonContent',
      title: 'Boston Content',
      type: 'array',
      of: [{type: 'block'}],
    }
  ],
}
