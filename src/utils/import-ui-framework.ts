import { App } from 'vue'
import { ElIcon, ElLoading, ElCard, ElButton, ElForm, ElFormItem, ElInput, ElSelect, ElOption } from 'element-plus'

export default function importUiFramework(app: App) {
  // 按需载入 Element Plus 组件
  app.use(ElButton).use(ElCard).use(ElLoading).use(ElIcon).use(ElForm).use(ElFormItem).use(ElInput).use(ElSelect).use(ElOption)
  return app
}