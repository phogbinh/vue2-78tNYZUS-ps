<template>
  <div class="hello">
    <div class='holder'>
      <form @submit.prevent='addSkill'>
        <ValidationProvider name='skill' rules='min:5' v-slot='{ errors }'>
          <input type='text' placeholder='Enter a skill you have..' v-model='skill'>
          <p class='alert' v-if='errors.length > 0'>{{ errors[0] }}</p>
        </ValidationProvider>
      </form>
      <ul>
        <li v-for='(data, index) in skills' :key='index'>{{ data['skill'] }}</li>
      </ul>
      <p>These are the skills that you possess.</p>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  'components': { ValidationProvider },
  'name': 'Skills',
  'data': () => {
    return {
      'skill': '',
      'skills': [
        { 'skill': 'vuejs' },
        { 'skill': 'frontend developer' }
      ]
    }
  },
  'methods': {
    addSkill() {
      this['skills'].push({ 'skill': this['skill'] })
      this['skill'] = ''; // clear out user input on enter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder {
  background: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}
p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
</style>
