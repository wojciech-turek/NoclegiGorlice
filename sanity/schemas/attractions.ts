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
    defineField({
      name: 'type',
      title: 'Typ',
      type: 'string',
      options: {
        list: [
          {title: 'Wycieczka', value: 'Wycieczka'},
          {title: 'Wydarzenie', value: 'Wydarzenie'},
          {title: 'Relaks', value: 'Relaks'},
          {title: 'Aktywność', value: 'Aktywność'},
          {title: 'Zwiedzanie', value: 'Zwiedzanie'},
          {title: 'Odpoczynek', value: 'Odpoczynek'},
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
    }),
  ],
})
