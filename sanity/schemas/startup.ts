export default {
  name: 'startup',
  title: 'Startup',
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
      name: 'url',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'mail',
      title: 'Mail',
      type: 'string',
    },
    {
      name: 'isInHouse',
      title: 'In house startup?',
      type: 'boolean',
    }
  ],
}
