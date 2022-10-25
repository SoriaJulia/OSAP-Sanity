export default {
	name: 'novedad',
	type: 'document',
	title: 'Novedad',
	fields: [
		{
			name: 'titulo',
			type: 'string',
			title: 'Titulo',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'contenido',
			type: 'array',
			of: [{ type: 'block' }],
			title: 'Contenido',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'imagen',
			type: 'image',
			title: 'Imagen',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'fechaPublicacion',
			type: 'datetime',
			title: 'Fecha de Publicacion',
			initialValue: new Date().toISOString(),
			validation: (Rule) => Rule.required(),
			options: {
				dateFormat: 'DD/MM/YYYY',
			},
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'URL',
			description:
				'Nombre a mostrar en la pagina de la noticia, debe ser unico',
			validation: (Rule) => Rule.required(),
			options: {
				source: 'titulo',
				maxLength: 200, // will be ignored if slugify is set
			},
		},
	],
	initialValue: {
		fechaPublicacion: new Date().toISOString(),
	},
};
