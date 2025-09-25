# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c6918d4b-f9a8-4b15-a63c-bd6d40054193

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c6918d4b-f9a8-4b15-a63c-bd6d40054193) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c6918d4b-f9a8-4b15-a63c-bd6d40054193) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Docker

This project includes a Dockerfile to build the app and serve it with nginx.


Build the image (from the project root):

```powershell
docker build -t chic-bowl-showcase:latest .
```

Run a container locally on port 3000 (the Dockerfile runs `npm start` which launches `vite preview` on port 3000):

```powershell
docker run --rm -p 3000:3000 chic-bowl-showcase:latest
```

Notes:
- The Dockerfile builds the app inside a Node container and then starts a `vite preview` server using `npm start` on port 3000.
- If you want to run the development server (hot-reload) locally, use `npm run dev` instead of building the image.

