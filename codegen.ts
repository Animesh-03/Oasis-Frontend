
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://34.217.146.53/graphql",
  documents: "graphql/*.gql",
  generates: {
    "./graphql/generated/": {
      preset: "client",
      plugins: ["typescript", "typescript-react-apollo"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
