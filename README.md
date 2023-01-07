# Dynamic Time Series

Thi full-fledged project dynamically visualized several stochastic processes on a chart. Currently, these processes include Brownian motion (Weiner process),
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

The gifs below illustrate these functionalities.

## Speed Control



## Brownian Motion Volatility
![bm_vol](https://user-images.githubusercontent.com/96806035/211163953-0bc57688-9817-4bf5-b188-d842ac2220ab.gif)

## Brownian Motion Drift
![bm_drift](https://user-images.githubusercontent.com/96806035/211163914-03be995b-1c00-4746-976c-011c3b98192b.gif)






