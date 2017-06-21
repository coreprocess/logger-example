# babel-plugin-js-logger - The Showcase

```
# Install the required modules
yarn
# ... or the old fashioned way
npm install

# build backend and frontend with logging messages
npm run build-dev
# ... or without logging messages
npm run build-prod

# Note: we use the transform-inline-environment-variables plugin to bake
# the environment variables into the code. We use this approach to make
# the logging configurable via the NODE_ENV variable. Of course you are free
# to use a different approach.

# Run the backend
npm start

# Open the frontend in your default browser:
xdg-open http://localhost:3000/
```
