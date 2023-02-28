
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://34.217.146.53/graphql",
  documents: "graphql/*.gql",
  generates: {
    "./graphql/generated/generated.tsx": {
      plugins: ["typescript", "typescript-react-apollo", "typescript-operations"]
    },
    "./graphql/generated/schema.graphql": {
      plugins: ["schema-ast"]
    }
  }
};

export default config;
