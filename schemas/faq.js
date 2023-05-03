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
		name: 'content',
		type: 'array',
		of: [{ type: 'block' }],
		title: 'Contenido',
		validation: (Rule) => Rule.required(),
	},
  {
    name:'tags',
    type:'string',
    title:'Palabras Clave',
    validation: (Rule) => Rule.required(),
    description:'Palabras que faciliten la busqueda, palabras importantes del contenido, palabras que en el titulo tienen acento ponerlas sin acento'

  }
  ],
};
