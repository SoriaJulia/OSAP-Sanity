export default {
  name: "servicioTurnosOnline",
  type: "document",
  title: "Servicio disponible para Turnos Online",
  fields: [
    {
      name: "nombre",
      type: "string",
      title: "Nombre",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "jotFormId",
      type: "string",
      title: "Id del formulario",
    },
  ],
};
