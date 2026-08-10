# GitHub Pages Deployment Design

## Goal

Publish the static Next.js site automatically to GitHub Pages whenever the `main` branch is updated.

## Architecture

The repository already uses Next.js static export (`output: "export"`), which writes the deployable site to `out/`. A GitHub Actions workflow will run on pushes to `main` and manual dispatches, install dependencies with pnpm, build the project, upload `out/` as the Pages artifact, and deploy it through the official GitHub Pages actions.

## Deployment behavior

- Target repository: `sillexy/AbramovGurme`.
- Target branch: `main`.
- Public site URL: `https://sillexy.github.io/AbramovGurme/`.
- No custom domain is configured.
- The workflow uses least-privilege `pages: write` and `id-token: write` permissions and a single `github-pages` deployment environment.
- GitHub Pages must be configured once in repository Settings to use **GitHub Actions** as its source; after that each qualifying push redeploys the site.

## Error handling and verification

- A failed dependency install or static build fails the workflow before an artifact can be deployed.
- Deployment is serialized so a newer run cannot race an older production deployment.
- Local validation runs the production build and confirms that `out/index.html` is generated.
