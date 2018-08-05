# A Sample Dataset for practicing Image Classification

This repo contains a dataset in the `/data` folder appropriate for training an image classifier. It is intended to be used with the code [presented in this blog post](https://thekevinscott.com/image-classification-in-javascript).

All images were found via searching [https://pexels.com](https://www.pexels.com/search/sad%20face/).

I've done my best to obtain a diverse set of images (by gender, race, and age) but since it's small, it's inevitably biased. For production purposes you would want to obtain a much more diverse dataset.

## Why Should a Dataset Be Diverse?

It's important that the training images you use are as similar as possible to the images you will be eventually predicting.

For instance, if you're training an image classifier to recognize pictures of fruit and your training data consists of well let brightly colored fruit but your users upload grainy, low-light shots, your accuracy will suffer.

## How to Build Your Own Dataset

To put together a dataset for training an image classifier, you need to organize your data like so:

```
- /folder-containing-your-images
  - /training
    - /class-one
    - /class-two
  - /validation
    - /class-one
    - /class-two
```

## Example
Let's say you want to recognize cats vs. dogs. Your folder structure would look like:

```
- /folder-containing-your-images
  - /training
    - /cats
    - /dogs
  - /validation
    - /cats
    - /dogs
```
