import { defineConfig } from "sanity";
import schemas from './schemas/schema'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import {media} from 'sanity-plugin-media'




export default defineConfig({
  title: "OSAP",
  projectId: "p6yd2y5a",
  dataset: "production",
  plugins: [deskTool(), visionTool(), media()],
  schema: {
    types: schemas,
  },
});