# renci-dot-org

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

# For Developers

## Local Deployment

1. Clone the repo
2. run npm install
3. create a .env.local file by copying the .env.local.example file found in the root folder
4. Add the correct values to each variable in that env file (You can get these from your manager.)
5. run npm install
6. run npm run dev
7. The application should be avaiable at localhost:3000

## Deployment

Heal is currently set up for automatic deployment through AWS.
Any merges into the main branch on github will trigger the rebuild.
The same applies for the staging build. 

### Content Update Deployments

1. Through the content manager or Backend Content API make your neccessary changes and make sure to save and publish.
2. Once your updates have been made go to GENERAL > Settings > Webhooks
3. Now find the webhook titled staging. (Note: This webhook should be enabled by default and if it is enabled there are no further steps to take. After your content changes were saved it would have automatically triggered a rebuild of the staging site.)
4. After 15 minutes check that your new updates are showing up as they should on the staging site and once they are approved head back to GENERAL > Settings > Webhook.
5. Find the webhook titled main and click into it. (Always leave it disabled)
6. On the top right hand corner find the button that says "Trigger". This will trigger a rebuild of the production side.
7. Wait 15 minutes and confirm that your changes have been applied to the production site.

## Workflow/Development

1. Create a new branch off of the staging branch and name it after the github issue the task belongs to. example. issue/46/navbar-links-fix
2. All commits should be given a short description of what was done and why. Example: The external links component was opening on the same page, added target blank to open a new tab.
3. When completed push up your new branch to the github repository.
4. If this is a feature that needs approval by other team members follow these steps to deploy your branch.
* Sign into AWS
* Go to deployments
* Find your branch and hit deploy
* Make note of the link created so that you can share it 
5. Create a PR and tag the content team owner and two developers for code review.
6. Never merge a PR until the code has been approved and the owner of the new feature gives us the green light to pus into production.
7. After approved and merged into staging, check the staging build to mke sure everything looks good.
8. Once staging is approved, create a PR to the main branch and notify the team that it is ready.