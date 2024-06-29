const DataLensImages = require.context('../Constants/ProjectImages/DataLens', true);
const DataLensImagesList = DataLensImages.keys().map(image => DataLensImages(image));

const MovieFinderImages = require.context('../Constants/ProjectImages/MovieFinder', true);
const MovieFinderImagesList = MovieFinderImages.keys().map(image => MovieFinderImages(image));

const HappyFeetzImages = require.context('../Constants/ProjectImages/HappyFeetz', true);
const HappyFeetzImagesList = HappyFeetzImages.keys().map(image => HappyFeetzImages(image));
console.log('DataLensImagesList',DataLensImagesList);
export const projectList = [
  // HAPPY FEETS
  {
    project_slug: "happy_feets",
    projectName: "Happy Feets",
    imageUrl: HappyFeetzImagesList,
    longDescription:
      "An E-commerce website that sells footwears. Features like product view, payment, return are implemented.",
    description:
      "An E-commerce website that sells footwears. Features like product view, payment, return are implemented.",
    gitHubLink: "https://github.com/augustinejoseph/e-commerce-website",
    liveLink: "http://happyfeetz.in",
    liveLinkExpired:true,
    features: [
      "Fully functional e-commerce website",
      "Features like login, cart, wishlist, Razorpay payment, Razorpay refund, return and so on...",
      "Python | Django | React | PostgreSQL | GIT | GitHub | Razorpay |",
      "AWS | Route53 | AWS | Nginx | Gunicorn",
      "Build using Django and MVT architecture",
      "Used technologies like Django, and PostgreSQL.",
      "Integrated online payment and refund using Razorpay.",
    ],
    technologyStacks: [
      "Python",
      "Django",
      "React",
      "PostgreSQL",
      "GIT",
      "GitHub",
      "Razorpay",
      "AWS",
      "Route53",
      "Nginx",
      "Gunicorn",
    ],
  },
  // MOVIEFINDER
  {
    project_slug: "movie_finder",
    projectName: "Movie Finder",
    imageUrl:MovieFinderImagesList,
    longDescription:
      "A website that uses TMDB API to fetch movie data and shown using React.",

    description:
      "A website that uses TMDB API to fetch movie data and shown using React.",
    gitHubLink: "https://github.com/augustinejoseph/movie-finder-react",
    features: [
      "Fetching Movie data using TMDB API",
      "Displaying movie information using React",
    ],
    liveLinkExpired:true,
    technologyStacks: [
      "React",
      "Create React App",
      "Axios",
      "TMDB",
    ],
  },
  // DATALENS
  {
    project_slug: "data_lens",
    projectName: "Data Lens",
    imageUrl: DataLensImagesList,
    longDescription:
      "Datalens is a Article publishing website where any users can publish an article on anything and anybody can read the articles for free. The project was inspired from Medium.com which provided numerous quality resources. In this project I used technologies like microservices, React, Django, NodeJS, Webhooks, Docker and so on. ",

    description:
      "Datalens is a Article publishing website where any users can publish an article on anything and anybody can read the articles for free...",
    gitHubLink:
      "https://github.com/augustinejoseph/datalens-article-publising-website",
    liveLink: "http://datalens.live",
    liveLinkExpired:true,
    features: [
      "Built for writers to share their thoughts and monetize their free time.",
      "Improved and responsive UI with a modern interface.",
      "Utilized technologies like React, Redux, Django, NodeJS, GraphQL, Rest API, PostgreSQL, MongoDB, NodeJS, JWT.",
      "User Authentication is handled by Django, PostgreSQL and JWT Tokens.",
      "Articles are managed using NodeJS server and MongoDB",
      "Premium feature is introduced to remove ads and view premium articles.",
      "",
      "Integrated Stripe webhooks to handle online payments securely.",
      "Implemented a headless architecture for enhanced flexibility and scalability.",
    ],
    technologyStacks: [
      "Python",
      "Django",
      "React",
      "NodeJS",
      "JWT",
      "RestAPI",
      "GraphQL",
      "PostgreSQL",
      "GIT",
      "MongoDB",
      "Stripe",
      "AWS",
      "GCP",
      "Docker",
      "Websocket",
      "Axios",
      "Microservice",
    ],
  },
];
