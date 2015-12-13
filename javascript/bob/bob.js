// Bob answers 'Sure.' if you ask him a question.
//
// He answers 'Whoa, chill out!' if you yell at him.
//
// He says 'Fine. Be that way!' if you address him without actually saying
// anything.
//
// He answers 'Whatever.' to anything else.

var responses = {
  question: 'Sure.',
  yell: 'Whoa, chill out!',
  nothing: 'Fine. Be that way!',
  whatever: 'Whatever.'
}

module.exports = function(){
  return {
    hey: function(s) {

      // return (
      //   (s.match(/[A-Z]/gi).every(function(e, idx, a){
      //     return (e === e.toUpperCase())
      //   }))
      //   ? responses['yell']
      //   : (s.split('').pop() === '?')
      //   ? responses['question']
      //   : responses['whatever']
      // )
      if (s.split('').every(function(s){
          return s === ' '
        }))
          return responses['nothing']

      if (s.match(/[A-Z]/gi)){
        if (s.match(/[A-Z]/gi).every(function(e, idx, a){
            return (e === e.toUpperCase())
          })) {
          return responses['yell']
        }
      }

      if (s.split('').pop() === '?')
        return responses['question']

      return responses['whatever']

    }
  }
}
