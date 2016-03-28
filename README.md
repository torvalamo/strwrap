# strwrap

![node version](http://img.shields.io/node/v/strwrap.svg)
[![npm version](https://badge.fury.io/js/strwrap.svg)](https://badge.fury.io/js/strwrap)

Wrap a string in something.

## Install

#### For server side

    npm install strwrap

#### For client side

    bower install strwrap

Or just copy strwrap.js to your client side js.

## Use

**Important**: This library adds properties to the `String.prototype` in your application. If you don't know what that means, you're probably fine.

Don't worry about `require()`'ing it multiple times, it will only apply the changes once.

    require('strwrap');
    
    var str = 'This is a string.';
    //-> This is a string.
    
    str.wrap('x')
    //-> xThis is a string.x
    
    str.wrap('xy')
    //-> xThis is a string.y
    
    str.wrap('xy', null) // even numbered argument we want to have on both sides
    //-> xyThis is a string.xy
    
    str.wrap('x', 'yz') // explicit before and after
    //-> xThis is a string.yz

Note that, as with any `String.prototype` property, you cannot use it on raw strings. You can only use it on something that returns a string (variables, function calls, etc).

    'my string'.wrap('foo') // DOESNT WORK
    
    var str = 'my string'
    str.wrap('foo') // WORKS
    
    String('my string').wrap('foo') // WORKS

### Shortcuts

There are some shortcuts available when it comes to brackets and quotation marks. 

I don't personally use them, since I'm not yet sure if it's a good idea. Also I prefer to be explicit in telling it how to wrap.

Feel free to leave comments in the github issues tracker if you have opinions on this.
    
#### Quotation marks
    
    str.quote // str.wrap('\'')
    //-> 'This is a string.'
    
    str.quoted // str.wrap('"')
    //-> "This is a string."
    
    str.aquote // str.wrap('‹›')
    //-> ‹This is a string.›
    
    str.aquoted // str.wrap('«»')
    //-> «This is a string.»
    
    str.raquote // str.wrap('›‹')
    //-> ›This is a string.‹
    
    str.raquoted // str.wrap('»«')
    //-> »This is a string.«
    
    str.cquote // str.wrap('‘’')
    //-> ‘This is a string.’
    
    str.lquote // str.wrap('‚‛')
    //-> ‚This is a string.‛
    
    str.cquoted // str.wrap('“”')
    //-> “This is a string.”
    
    str.lquoted // str.wrap('„‟')
    //-> „This is a string.‟

#### Brackets

    str.parentheses // str.wrap('()')
    //-> (This is a string.)
    
    str.braces // str.wrap('{}')
    //-> {This is a string.}
    
    str.chevrons // str.wrap('<>')
    //-> <This is a string.>
    
    str.crotchets // str.wrap('[]')
    //-> [This is a string.]
    
    str.dbrackets // str.wrap('⟦⟧')
    //-> ⟦This is a string.⟧