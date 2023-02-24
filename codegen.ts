
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: "graphql/**/*.gql",
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
