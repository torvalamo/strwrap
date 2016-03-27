/**
 * github.com/torvalamo/strwrap
 * MIT License
 */

'use strict';

/**
 * Wrap it in a conditional in case it's require()'d multiple times.
 */

if (!String.prototype.wrap) {
  
  Object.defineProperties(String.prototype, {
    wrap: {
      value: function(before, after) {
        if (!after) {
          if (after === null || before.length % 2) {
            after = before;
          } else {
            const length = before.length / 2;
            after = before.substr(length);
            before = before.substr(0, length);
          }
        }
        return before + this.toString() + after;
      }
    },
    quote: {
      get: function() {return this.wrap('\'')}
    },
    quoted: {
      get: function() {return this.wrap('"')}
    },
    aquote: {
      get: function() {return this.wrap('‹›')}
    },
    aquoted: {
      get: function() {return this.wrap('«»')}
    },
    raquote: {
      get: function() {return this.wrap('›‹')}
    },
    raquoted: {
      get: function() {return this.wrap('»«')}
    },
    cquote: {
      get: function() {return this.wrap('‘’')}
    },
    cquoted: {
      get: function() {return this.wrap('“”')}
    },
    lquote: {
      get: function() {return this.wrap('‚‛')}
    },
    lquoted: {
      get: function() {return this.wrap('„‟')}
    },
    parentheses: {
      get: function() {return this.wrap('()')}
    },
    braces: {
      get: function() {return this.wrap('{}')}
    },
    chevrons: {
      get: function() {return this.wrap('<>')}
    },
    crotchets: {
      get: function() {return this.wrap('[]')}
    },
    dbrackets: {
      get: function() {return this.wrap('⟦⟧')}
    }
  });
  
}