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
			of: [{type:'image'}, { type: 'block' }],
			title: 'Contenido',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'imagen',
			type: 'image',
			title: 'Imagen',
			description:'Se va a mostrar en un rectangulo de 600*400 en caso de tener una imagen mas grande incluirla en el contenido y dejar este campo vacio',
		},
		{
			name: 'miniatura',
			type: 'image',
			title: 'Miniatura',
			description:'Se va a mostrar en un rectangulo de 380*300',
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
