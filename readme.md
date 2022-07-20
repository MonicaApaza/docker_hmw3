```
-- Gets the latest node image base for node
FROM          node:alpine
-- This is pair value to specify the author
LABEL         author="Monica Apaza"
-- Set the port as a environment variable
ENV           PORT=3000
-- Directory inside the Linux container, working folder
WORKDIR       /var/www
-- Copy command to copy the jsons files to install dependencies
COPY          package.json package-lock.json ./
-- install depenedencies
RUN           npm install
-- Copy the source code to the Container Working folder /var/www
COPY          . ./
-- Expose the port using the environment variable
EXPOSE        $PORT
-- Run node command pointing to the index javascript file
ENTRYPOINT    [ "node" , "api/index.js"]

-- Command that builds the image "monikapaza/nodeapi:monica.apaza" using the code in the current Directory with Dockerfile as default template
docker build -t monikapaza/nodeapi:monica.apaza .
-- To verify the image type the following command
docker images

-- Create the container in detached mode using the image "monikapaza/nodeapi:monica.apaza" assigning the same port, the name of the container is "homework2"
 docker run -d -p 3000:3000 --name homework2 monikapaza/nodeapi:monica.apaza

-- To verify use 
docker ps -a

-- login to dockerhub
docker login

-- push image to dockerhub
docker push monikapaza/nodeapi:monica.apaza

-- Test the api with:
http://localhost:3000/api/host

```