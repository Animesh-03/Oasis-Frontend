
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/graphql`,
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
