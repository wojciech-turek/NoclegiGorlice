import {group} from 'console'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naglowek Strony',
      type: 'string',
    }),
    defineField({
      name: 'locations',
      title: 'Lokalizacje',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Opis Strony',
      type: 'text',
    }),
    defineField({
      name: 'invitation',
      title: 'Tekst Powitalny',
      type: 'text',
    }),
    defineField({
      name: 'ownerPhoto',
      title: 'Zdjęcie Właściciela',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Numer Telefonu',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Adres Email',
      type: 'string',
    }),
    defineField({
      name: 'addressData',
      title: 'Dane Adresowe',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Ulica',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'Miasto',
          type: 'string',
        }),
        defineField({
          name: 'zipCode',
          title: 'Kod Pocztowy',
          type: 'string',
        }),
        defineField({
          name: 'country',
          title: 'Kraj',
          type: 'string',
        }),
      ],
    }),
  ],
})
