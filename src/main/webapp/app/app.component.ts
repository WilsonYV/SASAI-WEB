import Vue from 'vue';
import Component from 'vue-class-component';
import Ribbon from '@/core/ribbon/ribbon.vue';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import LoginForm from '@/account/login-form/login-form.vue';
import LoginService from '@/account/login.service';

import '@/shared/config/dayjs';
import { Inject } from 'vue-property-decorator';

@Component({
  components: {
    ribbon: Ribbon,
    'jhi-navbar': JhiNavbar,
    'login-form': LoginForm,

    'jhi-footer': JhiFooter,
  },
})
export default class App extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;

  public logout(): Promise<any> {
    return this.loginService()
      .logout()
      .then(response => {
        this.$store.commit('logout');
        if (this.$route.path !== '/') {
          return this.$router.push('/');
        }
      });
    return Promise.resolve(this.$router.currentRoute);
  }

  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }
}
