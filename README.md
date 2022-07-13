# Artic-shop
### Technical assessment for a job interview.
#### Task Description:
Using the public API for the Art Institute of Chicago, we would like you to create a user interface serving up a paginated catalogue of products in their shop.

At a minimum, the page should show a product's title, image and display price. You may use any technologies you see fit to achieve this, though of course showing proficiency in any of the technologies specified in the job description will be advantageous.

#### Outcome Description:
I created a small app using nextjs and typescript that gets hold of SSR o display the 10 first aricles on build time. The app will listen for event on the component and will retrieve the next 10 items based in the current page once changed.
#### API: 
https://api.artic.edu/docs/

**Install**
  ```
  npm i
  ```

  or

  ```
  yarn install
  ```


**Run locally**
  ```
  npm start
  ```
  or
  ```
  yarn dev
  ```

## Pagination approach
As the app required of pagination, I created a component that handles it manually. But another approach to this would have been to make an infinite scrolling component. I'd have fetch the next 10 articles by detecting when the user's viewport was at the bottom or near the bottom of the screen.

## Other possible features.
The API provides ElasticSearch so it wouldn't be difficult to create an input component that fetches new data based on the input value after a few milliseconds after the user stops typing.

Also, I could have made a filter component that retrieves data based on specific terms that the API provides.
