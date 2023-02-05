import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rooms',
  title: 'Pokoje',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nazwa Pokoju',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis Pokoju',
      type: 'text',
    }),
    defineField({
      name: 'location',
      title: 'Lokalizacja',
      type: 'string',
    }),
    defineField({
      name: 'attributes',
      title: 'Atrybuty',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Zdjęcia',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})
