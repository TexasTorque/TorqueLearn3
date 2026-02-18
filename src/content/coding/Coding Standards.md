---
title: Coding Standards
date: 2026-02-18T17:33:00.000-06:00
author: Davis Jenney
---

# Programming style and best practices

## General Tips

- Simple is better than complicated.
- Explicit over implicit.
- Ability to read code is better than "more optimal".
- Comments allow anyone to understand the code.
- Stick through it. Don't turn to AI or a friend immediately if an issue arises. Troubleshoot it for a while. That said, if you are really stuck, ask questions in chain of authority.

## General Practices

### Use Accessors (Getters) and Mutators (Setters)

Java practices encapsulation, or the practice of protecting any code within a class. Thus, you cannot access a variable of a class from another. You have to use a getter. To avoid clutter, only use necessary variables, getters, and setters. If it's not used, get rid of it.

### Curly Braces

For all curly braces, they should go on the same line that they are attached to. 

```java
public class Example {
    public static void main(String[] args) {
        if (args.length > 5) {
            System.out.printf("Hello World!\n");
        }
    }
}
```

Unless...

### Lines over 80 characters

If a line is moving offscreen, try cutting it up. This should only occur in function calls, class constructors, etc.

```java
public static ArrayList<String> reallyLongFunction(double thisArgument, 
        const String thatArgument, ThisClass anArgument) {

}

// This is one of the only time to put 
// the curly brace on the next line
private ArrayList<double>
 anotherFunction(double thisArgument, 
                 const String thatArgument, 
                 ThisClass anArgument) 
{
// implementation here
}
```

### Naming Practices

Constants should be in all caps, variables/functions in camel case, and classes as capitalized.

```java
String CONSTANT_A = "Good!";
String constant_B = "Bad!";

String robotName = "Good!";
String robotname = "Bad!";
String RobotName = "Bad!";

class RobotClass ...   // Good!
class robotClass ...   // Bad!
class robot_class ...  // Bad!
```

### Comments

We prefer to use JavaDoc comments. This allows for functions to be easily understood when they become more complex. Obviously, this is unnecessary for functions such as getters or setters. 

```java

/** 
 *
 * This function flips the value of an int.
 *
 * @param  initial the int to be flipped
 * @return         the flipped int
 */
int flipInt(int initial) {
    return -a;
}
```
