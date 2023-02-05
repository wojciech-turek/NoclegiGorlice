import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'attractions',
  title: 'Atrakcje',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytul',
      type: 'string',
    }),
  ],
})
