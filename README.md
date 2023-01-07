# Dynamic Time Series

This project dynamically visualizes several stochastic processes on a chart. Currently, these processes include Brownian motion (Wiener process),
a white noise series, a mean-reversion process, and a GARCH(1,1) process. Furthermore, for every model there is an option to change the distribution of
innovations between Gaussian, Laplace, and Cauchy. I am currently in the process of adding more models and distributions.

This project is built on the React framework in JavaScript, and extensively uses React's functionality such as components and hooks. At the moment, all the algorithms
run on the front-end, however I am working on porting these computations to a backend server.

Other functionalities in the app include:
- Dynamic parameter selection using sliders. Changing parameters seamlessly changes the time-series on the chart.
- Pause and play functionality.
- Chart reset functionality.
- Ability to change the update speed of the time-series. This is inherently done by changing the setInterval rate in React.
- The chart itself is built using the lightweight charts library in JavaScript, and it comes with its own interactions.
- With GARCH in particular, the slider values automatically adjust with user input to ensure stationarity is imposed.

The gifs below illustrate these functionalities or try them yourself! 

Note: Unfortunately, the gifs don't show the dropdown menu for some reason.

## Speed Control
![speed](https://user-images.githubusercontent.com/96806035/211164824-bfc4c04d-85fd-4746-96a6-5815cedff57a.gif)

## Pause/Play/Reset Buttons
![pause-play-reset](https://user-images.githubusercontent.com/96806035/211164758-15161f32-a9fd-4330-8192-0cc2490a2ab8.gif)

## Brownian Motion Volatility
![bm_vol](https://user-images.githubusercontent.com/96806035/211163953-0bc57688-9817-4bf5-b188-d842ac2220ab.gif)

## Brownian Motion Drift
![bm_drift](https://user-images.githubusercontent.com/96806035/211163914-03be995b-1c00-4746-976c-011c3b98192b.gif)

## Transition to White Noise Series
![wn](https://user-images.githubusercontent.com/96806035/211164103-3ba16f47-8e4f-4c8a-8440-b81ae9ddae1c.gif)

## White Noise Volatility
![wn_vol](https://user-images.githubusercontent.com/96806035/211165045-5eae7485-465d-466b-8377-6c3f4055cf16.gif)

## White Noise Mean
![wn_mean](https://user-images.githubusercontent.com/96806035/211165048-8bf5c9b3-6f19-470d-9937-9d4a01567fad.gif)

## Mean-Reversion Volatility
![mr_vol](https://user-images.githubusercontent.com/96806035/211164664-e6678af3-2d3c-4d7f-a59e-20af41cc8939.gif)

## Mean-Reversion Rate Parameter
![mr_rev](https://user-images.githubusercontent.com/96806035/211164576-8991d7db-764f-4c9a-986f-fdfa22436b6b.gif)

## GARCH Series
![garch](https://user-images.githubusercontent.com/96806035/211164177-bbba2d27-c524-45b9-bb37-8e2bb6cb7a12.gif)

## GARCH Parameters Slider
![garch_params](https://user-images.githubusercontent.com/96806035/211164362-7bacf4e4-efe2-4ad4-82b3-25b3fec72b9b.gif)

## Brownian Motion with Laplace Distribution
![bm_laplace](https://user-images.githubusercontent.com/96806035/211164080-e7b698aa-10c3-4009-a112-00d596f028d0.gif)

## Brownian Motion with Cauchy Distribution
![bm_cauchy](https://user-images.githubusercontent.com/96806035/211164047-4ed4373f-043b-4737-b5db-89d1d5757a16.gif)

## White Noise with Cauchy Distribution
![wn_cauchy](https://user-images.githubusercontent.com/96806035/211164901-06a1c43a-4ad0-4b8f-9c3f-8301d6fee31c.gif)

## Garch with Laplace Distribution
![garch_laplace](https://user-images.githubusercontent.com/96806035/211164261-d66373b3-d726-46fa-a2b2-6f59337b5550.gif)

## Garch with Cauchy Distribution
![garch_cauchy](https://user-images.githubusercontent.com/96806035/211164194-9a6a0be9-a108-4934-bd49-79c670d38afa.gif)















