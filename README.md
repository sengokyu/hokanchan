# Hokan-chan

## ファイル一覧

```
.
├── projects;
│   ├── backend-google-suggest-proxy/  <-- Lambda function
│   └── frontend-hokanchan/            <-- Angular application
├── template.yml                       <-- SAM template
├── tsconfig.json                      <-- TypeScript configuration for Angular application
├── tsconfig.sam.json                  <-- TypeScript configuration for Lambda function
├── tslint.json
├── webpack.config.js                  <-- Webpack configuration for Lambda function
```

## 手順一覧

### ローカル開発

Invoke servers

```bash
# Invoke Lambda API server
npm run sam:start

# Invoke Angular dev server
npm run ng:start
```

Testing

```bash
# Test Lambda function
npm run sam:test

# Test Angular application
npm run ng:test
```

Building

```bash
# Build Lambda function
npm run sam:build

# Continuos build
npm run sam:watch

# Build Angular application
npm run ng:build
```


### デプロイ

```bash
# Deploy S3/Lambda/Api Gateway/CloudFront
npm run sam:deploy

# Show deploy errors
npm run sam:describe-failed-events
```

Upload Angular application to S3

```bash
npm run s3:sync
```

### アンデプロイ

```bash
# Delete S3 contents
npm run s3:delete

# Undeploy all
npm run sam:undeploy
```


