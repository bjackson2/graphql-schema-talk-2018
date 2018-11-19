# README

### To install

Assumes `npm` and `npx` are installed.

```
gem install bundler
bundle
npm i
rake db:migrate db:populate
```

### To run with just the client app

```
rails s -p 3002
```

### To publish schema

```
npx apollo service:push --key="<ENGINE_API_KEY>" --endpoint="https://localhost:<PORT>/graphql"
```
