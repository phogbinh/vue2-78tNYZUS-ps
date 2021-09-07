<template>
  <div class="hello">
    <div class='holder'>
      <ValidationObserver ref='form'>
        <form @submit.prevent='addSkill'>
          <ValidationProvider name='skill' rules='min:5' v-slot='{ errors }'>
            <input type='text' placeholder='Enter a skill you have..' v-model='skill'>
            <transition enter-active-class='animated flipInX' leave-active-class='animated flipOutX'>
              <p class='alert' v-if='errors.length > 0'>{{ errors[0] }}</p>
            </transition>
          </ValidationProvider>
        </form>
      </ValidationObserver>
      <ul>
        <transition-group enter-active-class='animated bounceInUp' leave-active-class='animated bounceOutDown'>
          <li v-for='(data, index) in skills' :key='index'>{{ data['skill'] }}</li>
        </transition-group>
      </ul>
      <p>These are the skills that you possess.</p>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  'components': { ValidationObserver, ValidationProvider },
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
      this['$refs']['form'].validate().then(success => {
        if (!success) {
            return
        }
        this['skills'].push({ 'skill': this['skill'] })
        this['skill'] = ''; // clear out user input on enter
        this.$nextTick(() => {
          this['$refs']['form'].reset()
        }) // wait until the models are updated in the ui
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';
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
