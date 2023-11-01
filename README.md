### Primeiros passos
    * https://www.youtube.com/watch?v=fo6R94jw6R4
    * [x] npm init -y
    * [x] npm i typescript -D
    * [x] npx tsc --init
    * [x] npm i express
    * [x] npm i @types/express -D
    * [x] npm i ts-node-dev -D
    * [x] npm i cors
    * [x] npm install --save @types/cors

### Config package.json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "ts-node-dev ./src/server.ts",
        "dev": "ts-node-dev ./src/server.ts"
    },
### Docker
    * docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
    * docker pull mysql
    * docker run -d --name mysql-server -p 3306:3306 -e "MYSQL_ROOT_PASSWORD=root" mysql
### Prisma
    * npm i prisma @types/node -D
    * npx prisma init
    ### 
        model User {
            id Int @id @default(autoincrement())
            email String @unique
            name String?

            @@map("user")
        }

        model Login {
            id Int @id @default(autoincrement())
            email String @unique
            name String?
            senha String?

            @@map("login")
        }
    * criar o banco
    * config banco .env
        * DATABASE_URL="postgresql://postgres:postgres@localhost:5432/prisma?schema=public"
    * npx prisma migrate dev --name create_user_login
    * npx prisma studio
        

### Prisma Config
    * DATABASE_URL="postgresql://postgres:postgres@localhost:5432/prisma?schema=public"
    * npx prisma migrate dev --name create_user_login
        ## Opcional 
            * npx prisma migrate reset
            * npx prisma migrate dev --name change_user_table_name
            * npx prisma migrate dev --name table_condominio

### vercel
    *  https://www.youtube.com/watch?v=8jttLYYDWjo
    *  https://www.youtube.com/watch?v=FZiza5N6BQU&t=440s
    * instalar dependência
    ```
    npm install -g vercel
    ```
#### vercel script
```
{
    "version": 2,
    "builds": [
        {
            "src": "./idst",
            "user": "@now/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/dist/server.js"
        }
    ]
}
```
### Neon tech
```
https://www.youtube.com/watch?v=FZiza5N6BQU
```
### Banco
```
postgres://srodrigo28:vFMD2di8jXAs@ep-blue-truth-21397092.us-east-2.aws.neon.tech/app-database
```

```
psql "postgres://default:Z7MJbOia1chK@ep-silent-rice-51260389.us-east-1.postgres.vercel-storage.com:5432/verceldb"
```
### Proximo
### Vercel 2

npm run vercel-build

npx vercel 

vercel --prod