export default {
  name: "faq",
  type: "document",
  title: "Ayuda",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
      validation: (Rule) => Rule.required(),
    },
    {
		name: 'contenido',
		type: 'array',
		of: [{ type: 'block' }],
		title: 'Contenido',
		validation: (Rule) => Rule.required(),
	},
  ],
};
