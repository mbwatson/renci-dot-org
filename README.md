# renci-dot-org

This is a [Next.js](https://nextjs.org/) project. To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
This project contains a [Github Action workflow](./.github/workflows/build-image-and-push.yaml) to build and push the image to the [RENCI container registry](containers.renci.org) with a [Dockerfile](./Dockerfile). The script will automatically run on a new release, and the release name is used as the image tag.

### containers.renci.org access token
The GH action uses a [robot account token](https://goharbor.io/docs/1.10/working-with-projects/project-configuration/create-robot-accounts/) with permissions to create artifacts and tags. If you modify or update this account in Harbor, make sure to change the `USER` and `PW` in the Github secrets settings.