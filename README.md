This is repository for our project: Samat Pelit

Instructions:

Enviromental variables:
Create file named `.env.local` under directory `/samatpelit`. created file should have following variables:
`MONGO_URI="<Your mongo connect uri here>"`

Navigate to directory: samatpelit
`cd samatpelit`

For development and real time updates you can use:
`npm run dev`

To build docker use:
`docker build -t samatpelit-docker .`.
To use docker use:
`docker run -p 3000:3000 samatpelit-docker`.
