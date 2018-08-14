# A Sample Dataset for practicing Image Classification

This repo is a companion for the article [Image Classification in the Browser with Javascript](https://thekevinscott.com/image-classification-in-javascript).

This repo contains data appropriate for training. [You can test image classification in your browser here](https://thekevinscott.github.io/ml-classifier-ui/).

Included in the `data` folder is:

* `data/pretrained-model-data` - A single image for testing for a valid prediction from MobileNet
* `data/colors` - A simple dataset to be used as a sanity check that training is working correctly
* `data/pexel-images` - A set of stock photography from the top three most popular categories on [Pexels](https://pexels.com)

![An example of using the datasets](ml-classifier-example.gif)

## Running

Clone this repo:

```
git clone https://github.com/thekevinscott/dataset-tutorial-for-image-classification.git
cd dataset-tutorial-for-image-classification
```

Install the packages with `yarn`:

```
yarn
```

Run the code with:

```
yarn develop
```

## Picking a Dataset

It's important that the training images you use are as similar as possible to the images you will be eventually predicting.

For instance, if you're training an image classifier to recognize pictures of fruit and your training data consists of well let brightly colored fruit but your users upload grainy, low-light shots, your accuracy will suffer.

## Organizing your Dataset

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

## Populating your dataset

A good rule of thumb is 80% training data to 20% validation data.

Some reference links:

* https://stackoverflow.com/questions/13610074/is-there-a-rule-of-thumb-for-how-to-divide-a-dataset-into-training-and-validatio

* https://www.researchgate.net/post/Is_there_an_ideal_ratio_between_a_training_set_and_validation_set_Which_trade-off_would_you_suggest

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

