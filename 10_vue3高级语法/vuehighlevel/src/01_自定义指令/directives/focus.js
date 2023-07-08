export default function directiveFocus(app) {
  app.directive("focus",{
    mounted(el) {
      el?.focus()
    }
  })
}