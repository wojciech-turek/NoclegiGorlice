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
      options: {
        list: [
          {title: 'Stróżówka', value: 'Stróżówka'},
          {title: 'Gorlice', value: 'Gorlice'},
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Cena',
      type: 'number',
    }),
    defineField({
      name: 'bedCount',
      title: 'Liczba łóżek',
      type: 'number',
    }),
    defineField({
      name: 'bedType',
      title: 'Rodzaj łóżek',
      type: 'string',
      options: {
        list: [
          {title: 'Pojedyncze', value: 'Pojedyncze'},
          {title: 'Podwójne', value: 'Podwójne'},
        ],
      },
    }),
    defineField({
      name: 'maxGuests',
      title: 'Maksymalna liczba gości',
      type: 'number',
    }),
    defineField({
      name: 'equipment',
      title: 'Wyposażenie Pokoju',
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
