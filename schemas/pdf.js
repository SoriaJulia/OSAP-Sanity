export default {
  name: "pdf",
  type: "document",
  title: "PDF",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nombre",
      validation: (Rule) =>
        Rule.required(),
    },
    {
      name: "file",
      type: "file",
      title: "Archivo",
      validation: (Rule) =>
        Rule.required(),
    },
    {
      name: "code",
      type: "string",
      title: "Codigo en la app",
      validation: (Rule) =>
        Rule.required(),
    },
  ],
};
