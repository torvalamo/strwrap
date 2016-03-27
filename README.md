# strwrap

![node version](http://img.shields.io/node/v/strwrap.svg)
[![npm version](https://badge.fury.io/js/strwrap.svg)](https://badge.fury.io/js/strwrap)

Wrap a string in something.

## Install

    npm install strwrap

Or just copy strwrap.js to your client side js.

## Use

It alters the String.prototype in your application. 

Don't worry about require()'ing it multiple times, it will only apply the changes once.

    require('strwrap');
    
    var str = 'This is a string.';
    //-> This is a string.
    
    str.wrap('x')
    //-> xThis is a string.x
    
    str.wrap('xx')
    //-> xThis is a string.x
    
    str.wrap('xx', null) // even numbered argument we want to have on both sides
    //-> xxThis is a string.xx
    
    str.wrap('x', 'yz') // explicit before and after
    //-> xThis is a string.yz

There are some shortcuts available when it comes to brackets and quotation marks.
    
### Quotation marks
    
    str.quote
    str.wrap('\'')
    //-> 'This is a string.'
    
    str.quoted
    str.wrap('"')
    //-> "This is a string."
    
    str.aquote // angle quote
    str.wrap('‹›')
    //-> ‹This is a string.›
    
    str.aquoted // double angle quote
    str.wrap('«»')
    //-> «This is a string.»
    
    str.raquote // reverse angle quote
    str.wrap('›‹')
    //-> ›This is a string.‹
    
    str.raquoted // reverse double angle quote
    str.wrap('»«')
    //-> »This is a string.«
    
    str.cquote // single (curve) quote
    str.wrap('‘’')
    //-> ‘This is a string.’
    
    str.lquote // low single (curve) quote
    str.wrap('‚‛')
    //-> ‚This is a string.‛
    
    str.cquoted // double (curve) quote
    str.wrap('“”')
    //-> “This is a string.”
    
    str.lquoted // low double (curve) quote
    str.wrap('„‟')
    //-> „This is a string.‟

### Brackets

    str.parentheses // round brackets
    str.wrap('()')
    //-> (This is a string.)
    
    str.braces // curly brackets
    str.wrap('{}')
    //-> {This is a string.}
    
    str.chevrons // angle brackets
    str.wrap('<>')
    //-> <This is a string.>
    
    str.crotchets // square brackets
    str.wrap('[]')
    //-> [This is a string.]
    
    str.dbrackets // double brackets
    str.wrap('⟦⟧')
    //-> ⟦This is a string.⟧