import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#5BA4A4',
            secondary: '#7B8E8E',
            deletefilter: '#2C3A3A',
            filterbg: '#EEF6F6'
          },
        },
      },
});
