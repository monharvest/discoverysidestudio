import {defineField, defineType} from 'sanity'

export const provider = defineType({
  name: 'provider',
  title: 'Provider',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
  ],
})
