# renci-dot-org

## Project deployment overview
*Note that this diagram is for the entire project, while this repo represents the Next.js application exclusively.*
![image](https://github.com/mbwatson/renci-dot-org/assets/16181779/26d297d4-867d-4cdc-90b8-6ad3088a3b14)

This is a [Next.js](https://nextjs.org/) project. To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API access
In order to get data from the Strapi server at `api.renci.org`, you need to provide an API token as an environment variable to be used in the request `Authorization` header. For development, create a `.env` file in the root of the project.

```env
STRAPI_ACCESS_TOKEN=YOUR_API_TOKEN
```

## Deployment
This project contains a [Github Action workflow](./.github/workflows/build-image-and-push.yaml) to build and push the image to the [RENCI container registry](containers.renci.org) with a [Dockerfile](./Dockerfile). The script will automatically run on a new release, and the release name is used as the image tag.

Once an image has been created, you can upgrade the deployment with the following helm command (from the root of the project):

```bash
helm upgrade RELEASE_NAME kubernetes
```

### containers.renci.org access token
The GH action uses a [robot account token](https://goharbor.io/docs/1.10/working-with-projects/project-configuration/create-robot-accounts/) with permissions to create artifacts and tags. If you modify or update this account in Harbor, make sure to change the `USER` and `PW` in the Github secrets settings.

### Strapi API access token
For the deployed environment, the `ACCESS_TOKEN` environment variable is provided to the Next.JS container using a Secret called `renci-dot-org-api`, which has one variable called `token`. You can check if a secret already exists:

```bash
kubectl get secrets -n YOUR_NAMESPACE_HERE
```

Generate a new one if not:
```bash
kubectl create secret generic renci-dot-org-api \
  --from-literal=token=YOUR_API_TOKEN_HERE
```

If it already exists, you can update the secret by editing the `token` field in the yaml file:
```bash
kubectl edit secret renci-dot-org-api
```
Note that is it needs to be base64 encoded, so translate the token with `echo "YOUR_TOKEN" | base64` before copying it into the yaml file.
