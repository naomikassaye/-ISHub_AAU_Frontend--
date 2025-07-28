                 CSS transform functions

    a. What I used in style.css

1. @keyframes girl

        a. translateX(calc(100% +100vw)):this starts the girl in the bike far off to the right. it pushes the girl to the right end of the screen.

        b. translateX(calc(-100% - 100vw)): This moves the gril all the way to the left part of the screen(because of the negative value).

        c. rotateY(180deg): this is used to make the girl on the bike turn around and return.

        d.scale(0.7): I used it to transform the girl image to 70% of the orginal size to make it more proportionate to the background. 

2. @keyframes leaf

        I used this to animate the falling trees.
        a. translate(10px) or translate(-10px):  this moves the leaves from side to side when falling which is used to simulate wind.

        b. rotate(0deg) to rotate(360deg): This is used to rotate the leaves as they fall.

    b. Other transform functions

I. translateY(): to move elements vertically along the Y-axis

II. translateZ():moves an element along the Z-axis which creates colser and farther effect in 3D.

III. skewX() and skewY(): skews elements along the X-axis or Y-axis without rotating it and only by tilting it by an angle.

IV. matrix(): applies scale,rotate,skew and translate in one step so controlling how an elements is transformed.

V. perspective(): defines depth perspective for 3D elements. it is used to simulate how objects appear as they get further away from the viewer.

and so on...