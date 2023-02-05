import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rooms',
  title: 'Pokoje',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytul',
      type: 'string',
    }),
  ],
})
