# typeface-learning
A repo for a fastai typeface image classification model as part of Chapter 7 Further Research section in the course textbook which states:

> Find the script training Imagenette using Mixup and use it as an example to build a script for a long training on your own project. Execute it and see if it helps.

## Objective

The objective of this project is to train a neural network to correctly classify typeface based on images of letters or words. I use the book "The Anatomy of Type" by Stephen Coles as my main reference for typeface classification.

## Typeface, Typeface Classification and Fonts

Typeface is the system with which letters are designed together.
Typeface classifications are groups of typeface which share some characteristic. The classification system I will use is the one introduced by Coles which "arranges the typeface into groups that are more closely tied to visual appearance."
Font is particular style, size and weight of typeface. If typeface is the class, a font is an instance of that class.

I will use the following typeface classifications and fonts, a subset of the 100 typeface introduced in the book, which I've selected only due to availability. Initially, I've selected only the "Regular" or equivalent character set although I may expand that in future efforts to improve the model.

- Humanist Serif
  - Adobe Jenson
  - FF Scala
  - Minion
  - Garamond Premier
  - MVB Verdigris
- Transitional Serif

---

I'll start by structuring the repo as follows:

```
- typeface-learning
  - js
    - files related to image dataset generation
  - python
    - files related to training the image classification model
```

## Image Generation


