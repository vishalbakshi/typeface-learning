# typeface-learning
A repo for a fastai typeface image classification model as part of Chapter 7 Further Research section in the course textbook which states:

> Find the script training Imagenette using Mixup and use it as an example to build a script for a long training on your own project. Execute it and see if it helps.

## Objective

The objective of this project is to train a neural network to correctly classify typeface based on images of letters or words. I use the book "The Anatomy of Type" by Stephen Coles as my main reference for typeface classification.

## Typeface, Typeface Classification and Fonts

Typeface is the system with which letters are designed together.
Typeface classifications are groups of typeface which share some characteristic. The classification system I will use is the one introduced by Coles which "arranges the typeface into groups that are more closely tied to visual appearance."
Font is particular style, size and weight of typeface. If typeface is the class, a font is an instance of that class.

I will use the following typeface, a subset of the 100 typeface introduced in the book, which I've selected only due to availability via my Adobe Fonts account. Initially, I've selected only the "Regular" or equivalent font although I may expand that in future efforts to improve the model.

Classes: 15

- Humanist Serif
  - Adobe Jenson
  - FF Scala
  - Minion
  - Garamond Premier
  - MVB Verdigris
- Transitional Serif
  - Adobe Caslon
  - Mrs Eaves
  - Plantin
  - Times New Roman
  - Le Monde Journal
- Rational Serif
  - Filosofia
  - LTC Bodoni 175 (in lieu of Bauer Bodoni)
- Contemporary Serif
  - Skolar
  - FF Meta Serif
- Inscribed/Engraved
  - Modesto
  - Trajan
- ~~Grotesque Sans~~
- Neo-Grotesque Sans
  - Antique Olive
- Gothic Sans
  - Bell Centennial
  - News Gothic
- Geometric Sans
  - ITC Avant Garde Gothic
  - Din 2014 (in lieu of FF Din)
  - Interstate
  - MVB Solano Gothic
- Humanist Sans
  - Gill Sans Nova (in lieu of Gill Sans)
  - Myriad
  - Cronos
  - Auto
- Neo-Humanist Sans
  - FF Meta
  - FF Dax
- Grotesque Slab
  - Clarendon Text (in lieu of Clarendon)
- Geometric Slab
  - Rockwell
- Humanist Slab
  - PMN Caecilia
  - FF Unit Slab
  - Adelle
- Script
  - Kinescope
  - Bickham Script
  - Tangier
- Display
  - Bree
  - Rumba
  - Trade Gothic Next (in lieu of Trade Gothic Bold Condensed No. 20)
  - Cabazon
---

## Image Generation

Text rendered onto HTML Canvas elements saved as PNGs.

