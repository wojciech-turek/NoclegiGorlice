import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offers',
  title: 'Oferty Specjalne',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nazwa oferty',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis oferty',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Cena za osobę',
      type: 'number',
    }),
    defineField({
      name: 'expiryDate',
      title: 'Data wygaśnięcia',
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
    }),
  ],
})
