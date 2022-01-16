# Builder / Monteur

## Le problème

Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. 
Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code.

For example, let’s think about how to create a House object. To build a simple house, you need to construct four walls and a floor, 
install a door, fit a pair of windows, and build a roof. But what if you want a bigger, brighter house, with a backyard and other goodies 
(like a heating system, plumbing, and electrical wiring)?

There’s another approach that doesn’t involve breeding subclasses. You can create a giant constructor right in the base House class with all possible parameters 
that control the house object. While this approach indeed eliminates the need for subclasses, it creates another problem.

In most cases most of the parameters will be unused, making the constructor calls pretty ugly. 
For instance, only a fraction of houses have swimming pools, so the parameters related to swimming pools will be useless nine times out of ten.

## Le patron de conception

Builder is a creational design pattern that lets you construct complex objects step by step. 
The pattern allows you to produce different types and representations of an object using the same construction code.


## Avantages et inconvénients

+ You can construct objects step-by-step, defer construction steps or run steps recursively.
+ You can reuse the same construction code when building various representations of products.
+ Single Responsibility Principle. You can isolate complex construction code from the business logic of the product.

- The overall complexity of the code increases since the pattern requires creating multiple new classes.

