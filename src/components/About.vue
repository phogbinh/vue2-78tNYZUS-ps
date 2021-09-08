<template>
  <div class='about'>
    <h1>Hello {{ their_name }}, this is an about page</h1>
    <p>Some paragraph here.</p>
  </div>
</template>

<script>
export default {
  'name': 'Skills',
  'data': function() { // did not use arrow function due to behavior of `this'
    return {
      'their_name': this['$route']['params']['name']
    }
  }
}
</script>
