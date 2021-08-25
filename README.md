## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Missing COLLECTION_NAME environment variable.

When you first run the project you may see the following error:

```
Missing COLLECTION_NAME environment variable. See README.md for instructions of how to fix this error.
```

You can fix this error by doing the following:

1. Duplicate the `.env.default` file and name that copy `.env.local`
2. Set `COLLECTION_NAME` to your own name, eg: `COLLECTION_NAME=johnSmith`
3. Re-run the project and the error should be resolved
