# ホスティング

## AWSリソース

* S3
* Lambda
* API Gateway
* CloudFront

### SSL証明書の作成

```sh
# 証明書の作成を要求
aws --region us-east-1 acm request-certificate --domain-name '*.uart.dev' --validation-method DNS
# DNSに登録すべき検証用CNAMEレコードを表示
aws --region us-east-1 acm describe-certificate --certificate-arn 上記コマンドで出力されたARN
```

表示されたDNS CNAMEレコードを登録します。

DNSレコードを登録したら、検証されるのを待ちます。

```sh
# 検証を待つ
aws --region us-east-1 acm wait certificate-validated --certificate-arn 上記コマンドで出力されたARN
```


## デプロイ

CloudFormationを使用します。

template.yaml内に全リロースを入れています。

CloudFrontのカスタムドメインも同時に設定しているので、先にDNSレコードが登録されているとエラーで失敗します。

