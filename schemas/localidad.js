export default {
  name: "localidad",
  type: "document",
  title: "Localidad",
  fields: [
    {
      name: "nombre",
      type: "string",
      title: "Nombre",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "provincia",
      type: "string",
      title: "Provincia",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gecrosID",
      type: "string",
      title: "ID en Gecros",
      validation: (Rule) => Rule.required(),
    },
  ],
};
