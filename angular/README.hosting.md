# ホスティング

AWS S3 でホスティングします。

## S3 バケットの準備

別ドメイン名でホストする場合は、バケット名を DNS CNAME レコードに合わせる必要があります。

```sh
s3bucket=MY-BUCKET-NAME
s3uri=s3://${s3bucket}
```

```sh
# バケットを作成
aws s3 mb ${s3uri} --region ap-northeast-1
# バケットをWebiteとして使用
aws s3 website ${s3uri} --index-document
# 公開ポリシーをセット
aws s3api put-bucket-policy --bucket ${s3bucket} --policy file://etc/aws-s3-bucket-policy.json
```

## アップロード

```sh
aws s3 sync dist/hokanchan ${s3uri}
```

## httpsアクセス

AWS S3静的Webホストはhttpsが使えないので、別途CloudFrontを用意します。

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



