
## Installing

Install [nodejs](https://nodejs.org/en/) and npm

Install / update [TypeScript](http://www.typescriptlang.org/)
```bash
npm install -g typescript@latest
```

Install npm dependencies

```bash
npm install
```

Compile typescript
```
tsc
```

## Dotenv

[dotenv](https://www.npmjs.com/package/dotenv) module is used in this project
It loads environment variables from a .env file into process.env

.env file should be created in the root dir of the project, it is added to .gitignore

Environment variables should be listed on new lines in the key-value format NAME=VALUE
e.g

API_PORT=<API server port>
MONGO_USER=username
MONGO_PASSWORD=password
MONGO_PATH=mongo path
MONGO_DB=mongo database name
MONGO_COLLECTION=mongo collection name

Variables listed above are obligatory

## Usage

```bash
npm run dev
```

Navigate to http://localhost:port