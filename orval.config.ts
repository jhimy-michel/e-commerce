import { defineConfig } from 'orval';

export default defineConfig({
  ecommerce: {
    output: {
      mode: 'tags',
      target: 'src/api/endpoints/ecommerceApi.ts',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/api/mutator/custom-instance.ts',
          name: 'customInstance'
        },
        query: {
          useQuery: true,
          useInfinite: false,
          useInfiniteQueryParam: 'limit'
        }
      }
    },
    input: {
      target: './openapi.json'
    }
  }
});
