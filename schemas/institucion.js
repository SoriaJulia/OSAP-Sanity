export default {
  name: "institucion",
  type: "document",
  title: "Institución",
  fields: [
    {
      name: "nombre",
      type: "string",
      title: "Nombre",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "domicilio",
      type: "string",
      title: "Domicilio",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "localidad",
      type: "reference",
      title: "Localidad",
      to: { type: "localidad" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "telefono",
      type: "string",
      title: "Telefono",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageUrl",
      type: "url",
      title: "Link a la pagina de la institucion",
    },
    {
      name: "cartillaUrl",
      type: "url",
      title: "Link a la cartilla",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (typeof field === "undefined" && !context.document.archivo) return "Requerido si no se sube un documento";
          return true;
        }),
    },
    {
      name: "archivo",
      type: "file",
      title: "Documento con la cartilla",
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (typeof field === "undefined" && !context.document.cartillaUrl) return "Requerido si no se sube un Link";
          return true;
        }),
    },
  ],
};
