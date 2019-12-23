import Vue from 'vue'

import {
  Loading,
  MessageBox,
  Notification,
  Message,
  Button,
  Input,
  Radio,
  Container,
  Table,
  TableColumn,
  InputNumber,
  Header,
  Main,
  Menu,
  MenuItem,
  Submenu,
  Row,
  Col,
  Form,
  FormItem,
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;


